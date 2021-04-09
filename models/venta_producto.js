const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return VentaProducto.init(sequelize, DataTypes);
}

class VentaProducto extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    IdVentaProducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Venta_IdVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'venta',
        key: 'Id'
      }
    },
    Producto_IdProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'Id'
      }
    },
    Precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'venta_producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdVentaProducto" },
        ]
      },
      {
        name: "fk_venta_has_producto_producto1_idx",
        using: "BTREE",
        fields: [
          { name: "Producto_IdProducto" },
        ]
      },
      {
        name: "fk_venta_has_producto_venta1_idx",
        using: "BTREE",
        fields: [
          { name: "Venta_IdVenta" },
        ]
      },
    ]
  });
  return VentaProducto;
  }
}
