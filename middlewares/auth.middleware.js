// Xu ly ham nay truoc khi den 1 ham nao do
let db = require('../db');

module.exports.requireAuth = (req, res, next) => {
    console.log(req.cookies, req.signedCookies);
    if (!req.signedCookies.userId) {  // Kiem tra xem da co cookie chua
        res.redirect('/auth/login');
        return;
    }

    let user = db.get('users').find({ 
        id: req.signedCookies.userId
    }).value();

    if(!user) {
        res.render('/auth/login');
        return;
    }

    res.locals.user = user; // Chi ton tai trong 1 vong doi cuar req res

    next();
};