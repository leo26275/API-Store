const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Venta.init(sequelize, DataTypes);
}

class Venta extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cliente: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'venta',
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
  return Venta;
  }
}
