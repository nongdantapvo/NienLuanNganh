const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Categories extends Model {
    static associate(models) {
      // Mối quan hệ "nhiều-nhiều" giữa Categories và Products thông qua CategoryProduct
      Categories.belongsToMany(models.Products, {
        through: 'CategoryProduct', // Tên của bảng trung gian
        foreignKey: 'categoryId', // Khóa ngoại trong bảng trung gian liên kết với Categories
      });
    }
  }

  Categories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Categories',
    }
  );

  return Categories;
};
