const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Producto.init(sequelize, DataTypes);
}

class Producto extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Codigo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    StockMinimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    Precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    IdCategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'Id'
      }
    },
    IdMarca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'marca',
        key: 'Id'
      }
    },
    IdImagen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'imagen',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "fk_categoria_has_Producto_idx",
        using: "BTREE",
        fields: [
          { name: "IdCategoria" },
        ]
      },
      {
        name: "fk_marca_has_Producto_idx",
        using: "BTREE",
        fields: [
          { name: "IdMarca" },
        ]
      },
      {
        name: "fk_imagen_has_Producto",
        using: "BTREE",
        fields: [
          { name: "IdImagen" },
        ]
      },
    ]
  });
  return Producto;
  }
}
