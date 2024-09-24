'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        firstName: 'Eren',
        lastName: 'Jeager',
        email: 'eren@example.com',
        password: '123456', 
        profileImage: 'default.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Levi',
        lastName: 'Hackerman',
        email: 'levi@example.com',
        password: '123456',
        profileImage: 'default.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
