const {Router} = require('express');
const brandService = require('../services/brand_service');
const router = Router();

router.get('/', (req, res) => {
    brandService.getBrand().then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.get('/:brand_id', (req, res) => {
    brandService.getBrandById(req.params.brand_id).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.post('/', (req, res) => {
    brandService.createBrand(req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.put('/:brand_id', (req, res) => {
    brandService.updateBrand(req.params.brand_id, req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.put('/status/:brand_id', (req, res) => {
    brandService.updateStatusBrand(req.params.brand_id, req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.delete('/:brand_id', (req, res) => {
    brandService.deleteBrand(req.params.brand_id).then(data => {
        res.status(data.statusCode).json(data)
    });
});

module.exports = router;