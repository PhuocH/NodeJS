/**
 * File chỉ kết nối với Network của NodeJS
 */

const app = require("./src/app");

const port = process.env.PORT || 3056

const server = app.listen(port, () => {
    console.log(`WSV eCommerce start with ${port}`);
})

// process.on('SIGNINT', () => {
//     server.close(() => console.log(`Exit Server Express`))
//     // notify.send(ping...)
// })