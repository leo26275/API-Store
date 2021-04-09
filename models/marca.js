const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Marca.init(sequelize, DataTypes);
}

class Marca extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Estado: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'marca',
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
  return Marca;
  }
}
