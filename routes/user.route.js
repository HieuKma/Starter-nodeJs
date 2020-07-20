var express = require('express');
const controller = require('../controllers/user.controller');
// Muốn đi từ A->B thì phải đi là A->C->D->E->F->B thì (C->D->E->F) là middleware(có thể có hoặc không
const validate = require('../validate/user.validate');

var router = express.Router();

router.get('/', controller.index);

// function middleware1(req, res, next) {
//     console.log('Middleware 1');
//     next(); // chuyen sang middleware 2
// }
// function middleware2(req, res, next) {
//     console.log('Middleware 2');
//     res.send('Hello');
// }
// router.get('/test', middleware1, middleware2);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getId);

// Kiem tra validate, neu co loi thi nhap lai
// Neu khong co loi thi => controller.postCreate
router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;