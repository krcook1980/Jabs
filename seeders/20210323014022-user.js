'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User', [
      {
        race: 'White',
        sex: 'Female',
        age: 87,
        location: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'White',
        sex: 'Male',
        age: 82,
        location: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'White',
        sex: 'Female',
        age: 42,
        location: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'White',
        sex: 'Female',
        age: 61,
        location: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'Hispanic',
        sex: 'Male',
        age: 46,
        location: 'Texas'
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        race: 'Hispanic',
        sex: 'Female',
        age: 46,
        location: 'Texas'
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        race: 'White',
        sex: 'Female',
        age: 61,
        location: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'White',
        sex: 'Male',
        age: 67,
        location: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'White',
        sex: 'Female',
        age: 67,
        location: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        race: 'White',
        sex: 'Female',
        age: 91,
        location: 'Califo
        createdAt: new Date(),
        updatedAt: new Date()rnia',
      },
      {
        race: 'White',
        sex: 'Female',
        age: 61,
        location: 'Califo
        createdAt: new Date(),
        updatedAt: new Date()rnia',
      },


    ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
