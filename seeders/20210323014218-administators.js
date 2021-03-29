'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Administrators', [
      {
        username: 'KellyH',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'KellyC',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Andrew',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Ricky',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Eloy',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Spencer',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Administrators', null, {});

  }
};

