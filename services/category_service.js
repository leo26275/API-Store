const sequelize = require('../configs/database')

async function getCategories() {
    let category = await models.Categoria.findAll();
    if (!category) {
        return {statusCode: 404, message: "No records found"}
    }
    return {statusCode: 202, response: category};
}

async function getCategoryById(category_id) {
    let category = await models.Categoria.findByPk(category_id);
    if (!category) {
        return {statusCode: 404, message: "There is no category with id " + category_id}
    }
    return {statusCode: 202, response: category};
}

async function createCategory(body) {
    let category;
    try {
        body.Estado = 1;
        category = await models.Categoria.create(body);
        return {statusCode: 201, message: "Category created successfully", response: category}
    } catch (error) {
        console.log(error);
        return {statusCode: 400, message: "The category could not be created"}
    }
}

async function updateCategory(category_id, body) {

    try {
        
        let category = await models.Categoria.findByPk(category_id);
        if (!category) {
            return {statusCode: 404, message: "There is no category with id " + category_id}
        }
        
        await models.Categoria.update({ Nombre: body.Nombre }, {
            where: {
                Id: category_id
            }
        });
        
        return {statusCode: 201, message: "Category update successfully"}
    } catch (error) {
        console.log(error);
        return {statusCode: 400, message: "The category could not be update"}
    }
}

async function updateStatusCategory(category_id, body) {

    try {
        
        let category = await models.Categoria.findByPk(category_id);
        if (!category) {
            return {statusCode: 404, message: "There is no category with id " + category_id}
        }
        
        await models.Categoria.update({ Estado: body.Estado }, {
            where: {
                Id: category_id
            }
        });
        
        return {statusCode: 201, message: "Status category update successfully"}
    } catch (error) {
        console.log(error)
        return {statusCode: 400, message: "The status category could not be update"}
    }
}


async function deleteCategory(category_id) {

    try {
        
        let category = await models.Categoria.findByPk(category_id);
        if (!category) {
            return {statusCode: 404, message: "There is no category with id " + category_id}
        }
        
        await models.Categoria.destroy({
            where: {
                Id: category_id
            }
        });
        
        return {statusCode: 201, message: "Category delete successfully"}
    } catch (error) {
        console.log(error)
        return {statusCode: 400, message: "The category could not be delete"}
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    updateStatusCategory,
    deleteCategory
}