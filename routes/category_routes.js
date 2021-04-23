const {Router} = require('express');
const categoryService = require('../services/category_service');
const router = Router();

router.get('/', (req, res) => {
    categoryService.getCategories().then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.get('/:category_id', (req, res) => {
    categoryService.getCategoryById(req.params.category_id).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.post('/', (req, res) => {
    categoryService.createCategory(req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.put('/:category_id', (req, res) => {
    categoryService.updateCategory(req.params.category_id, req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.put('/status/:category_id', (req, res) => {
    categoryService.updateStatusCategory(req.params.category_id, req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.delete('/:category_id', (req, res) => {
    categoryService.deleteCategory(req.params.category_id).then(data => {
        res.status(data.statusCode).json(data)
    });
});


module.exports = router;