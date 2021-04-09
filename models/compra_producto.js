const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CompraProducto.init(sequelize, DataTypes);
}

class CompraProducto extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    IdCompraProducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Producto_IdProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'Id'
      }
    },
    Compra_IdCompra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'compra',
        key: 'Id'
      }
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Costo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'compra_producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdCompraProducto" },
        ]
      },
      {
        name: "fk_producto_has_compra_compra1_idx",
        using: "BTREE",
        fields: [
          { name: "Compra_IdCompra" },
        ]
      },
      {
        name: "fk_producto_has_compra_producto1_idx",
        using: "BTREE",
        fields: [
          { name: "Producto_IdProducto" },
        ]
      },
    ]
  });
  return CompraProducto;
  }
}
