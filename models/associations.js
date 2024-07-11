const Address = require('./address');
const Category = require('./category');
const Keranjang = require('./keranjang');
const Order = require('./order');
const OrderDetail = require('./orderDetail');
const Product = require('./product');
const User = require('./user');

User.hasMany(Address, { foreignKey: 'userId'});
User.hasMany(Keranjang, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId'});

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Product.hasMany(Keranjang, { foreignKey: 'productId' });

Category.hasMany(Product, { foreignKey: 'categoryId'});

Address.belongsTo(User, { foreignKey: 'userId' });

Order.belongsTo(User, { foreignKey: 'userId' });
Order.hasMany(OrderDetail, { foreignKey: 'orderId'});

OrderDetail.belongsTo(Order, { foreignKey: 'orderId' });

Keranjang.belongsTo(User, { foreignKey: 'userId' });
Keranjang.belongsTo(Product, { foreignKey: 'productId' });






// OrderDetail.belongsTo(Product, { foreignKey: 'productId' });
// Product.hasMany(OrderDetail, { foreignKey: 'productId' });


module.exports = {
    Address,
    Category,
    Order,
    OrderDetail,
    Product,
    User,
  };