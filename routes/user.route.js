var express = require('express');
const controller = require('../controllers/user.controller');
// Muốn đi từ A->B thì phải đi là A->C->D->E->F->B thì (C->D->E->F) là middleware(có thể có hoặc không
const validate = require('../validate/user.validate');

const authMiddleware = require('../middlewares/auth.middleware');

var router = express.Router();

router.get('/' , controller.index); // middleware

router.get('/cookie', (req, res, next) => { // Cookies
    res.cookie('user-id', 12345);
    res.send('Hello Hieu');
})

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getId);

// Kiem tra validate, neu co loi thi nhap lai
// Neu khong co loi thi => controller.postCreate
router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;