'use strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt') //Thư viện dùng để mã hóa password
const crypto = require('crypto')

const RoleUser = {
    GUEST: 'GUEST',
    MEMBER: 'MEMBER',
    MANAGER: 'MANAGER',
    ADMIN: 'ADMIN'
}

class AccessService {

    static signUp = async ({ name, email, password }) => {
        try {
            //step1: check email exist?

            const holderUser = await userModel.findOne({ email }).lean()

            if (holderUser) {
                return {
                    code: 'xxx',
                    message: 'Shop already register!'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10) //10 là vòng lặp để băm password bằng bcrypt
            const newUser = await userModel.create({
                name, email, passwordHash, roles: [RoleUser.MEMBER]
            })

            if (newUser) {
                //created 
                //privateKey: tạo cho người dùng không lưu vào hệ thống, sign Token
                //publicKey: lưu vào hệ thống, verify Token
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })

                console.log({ privateKey, publicKey }); //save collection KeyStore
            }

        } catch (error) {
            return {
                code: 'xxx',
                message: error.message
            }
        }
    }
}

module.exports = AccessService