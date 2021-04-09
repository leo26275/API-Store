const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Categoria.init(sequelize, DataTypes);
}

class Categoria extends Sequelize.Model {
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
    tableName: 'categoria',
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
  return Categoria;
  }
}
