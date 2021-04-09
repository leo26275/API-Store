const sequelize = require('../configs/database')

async function getBrands() {
    let brand = await models.Marca.findAll();
    if (!brand) {
        return {statusCode: 404, message: "No records found"}
    }
    return {statusCode: 202, response: brand};
}

async function getBrandById(brand_id) {
    let brand = await models.Marca.findByPk(brand_id);
    if (!brand) {
        return {statusCode: 404, message: "There is no brand with id " + brand_id}
    }
    return {statusCode: 202, response: brand};
}
async function createBrand(body) {
    let brand;
    try {
        body.Estado = 1;
        brand = await models.Marca.create(body);
        return {statusCode: 201, message: "Brand created successfully", response: brand}
    } catch (error) {
        console.log(error)
        return {statusCode: 400, message: "The brand could not be created"}
    }
}

async function updateBrand(brand_id, body) {

    try {
        
        let brand = await models.Marca.findByPk(brand_id);
        if (!brand) {
            return {statusCode: 404, message: "There is no brand with id " + brand_id}
        }
        
        await models.Marca.update({ Nombre: body.Nombre }, {
            where: {
                Id: brand_id
            }
        });
        
        return {statusCode: 201, message: "Brand update successfully", response: brand}
    } catch (error) {
        console.log(error)
        return {statusCode: 400, message: "The brand could not be update"}
    }
}

async function updateStatusBrand(brand_id, body) {

    try {
        
        let brand = await models.Marca.findByPk(brand_id);
        if (!brand) {
            return {statusCode: 404, message: "There is no brand with id " + brand_id}
        }
        
        await models.Marca.update({ Estado: body.Estado }, {
            where: {
                Id: brand_id
            }
        });
        
        return {statusCode: 201, message: "Status Brand update successfully"}
    } catch (error) {
        console.log(error)
        return {statusCode: 400, message: "The status brand could not be update"}
    }
}

async function deleteBrand(brand_id) {

    try {
        
        let brand = await models.Marca.findByPk(brand_id);
        if (!brand) {
            return {statusCode: 404, message: "There is no brand with id " + brand_id}
        }
        
        await models.Marca.destroy({
            where: {
                Id: brand_id
            }
        });
        
        return {statusCode: 201, message: "Brand delete successfully"}
    } catch (error) {
        console.log(error)
        return {statusCode: 400, message: "The brand could not be delete"}
    }
}


module.exports = {
    getBrands,
    getBrandById,
    createBrand,
    updateBrand,
    updateStatusBrand,
    deleteBrand
}