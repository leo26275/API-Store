const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Compra.init(sequelize, DataTypes);
}

class Compra extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Proveedor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'compra',
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
    ]
  });
  return Compra;
  }
}
