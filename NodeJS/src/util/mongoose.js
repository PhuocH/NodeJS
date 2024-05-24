module.exports = {
    //Hàm xử lý Array[] tránh bị define trong thư viện hbs 
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toOject())
    },

    //Hàm xử lý một Object tránh bị define trong thư viện hbs 
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toOject() : mongoose
    }
}