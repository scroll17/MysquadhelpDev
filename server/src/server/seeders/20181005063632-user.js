const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Admin',
      lastName: '1',
      displayName: "First admin",
      email: 'admin1@gmail.com',
      password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8)),
      role: "admin",
      isActive: true,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
