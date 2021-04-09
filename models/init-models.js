var DataTypes = require("sequelize").DataTypes;
var _Categoria = require("./categoria");
var _Compra = require("./compra");
var _CompraProducto = require("./compra_producto");
var _Imagen = require("./imagen");
var _Marca = require("./marca");
var _Producto = require("./producto");
var _Venta = require("./venta");
var _VentaProducto = require("./venta_producto");

function initModels(sequelize) {
  var Categoria = _Categoria(sequelize, DataTypes);
  var Compra = _Compra(sequelize, DataTypes);
  var CompraProducto = _CompraProducto(sequelize, DataTypes);
  var Imagen = _Imagen(sequelize, DataTypes);
  var Marca = _Marca(sequelize, DataTypes);
  var Producto = _Producto(sequelize, DataTypes);
  var Venta = _Venta(sequelize, DataTypes);
  var VentaProducto = _VentaProducto(sequelize, DataTypes);

  Producto.belongsTo(Categoria, { as: "IdCategoria_categorium", foreignKey: "IdCategoria"});
  Categoria.hasMany(Producto, { as: "productos", foreignKey: "IdCategoria"});
  CompraProducto.belongsTo(Compra, { as: "Compra_IdCompra_compra", foreignKey: "Compra_IdCompra"});
  Compra.hasMany(CompraProducto, { as: "compra_productos", foreignKey: "Compra_IdCompra"});
  Producto.belongsTo(Imagen, { as: "IdImagen_imagen", foreignKey: "IdImagen"});
  Imagen.hasMany(Producto, { as: "productos", foreignKey: "IdImagen"});
  Producto.belongsTo(Marca, { as: "IdMarca_marca", foreignKey: "IdMarca"});
  Marca.hasMany(Producto, { as: "productos", foreignKey: "IdMarca"});
  CompraProducto.belongsTo(Producto, { as: "Producto_IdProducto_producto", foreignKey: "Producto_IdProducto"});
  Producto.hasMany(CompraProducto, { as: "compra_productos", foreignKey: "Producto_IdProducto"});
  VentaProducto.belongsTo(Producto, { as: "Producto_IdProducto_producto", foreignKey: "Producto_IdProducto"});
  Producto.hasMany(VentaProducto, { as: "venta_productos", foreignKey: "Producto_IdProducto"});
  VentaProducto.belongsTo(Venta, { as: "Venta_IdVenta_ventum", foreignKey: "Venta_IdVenta"});
  Venta.hasMany(VentaProducto, { as: "venta_productos", foreignKey: "Venta_IdVenta"});

  return {
    Categoria,
    Compra,
    CompraProducto,
    Imagen,
    Marca,
    Producto,
    Venta,
    VentaProducto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
