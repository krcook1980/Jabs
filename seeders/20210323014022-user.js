'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkInsert('Users', [
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
        location: 'Texas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        race: 'Hispanic',
        sex: 'Female',
        age: 46,
        location: 'Texas',
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
        location: 'California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        race: 'White',
        sex: 'Female',
        age: 61,
        location: 'California',
        createdAt: new Date(),
        updatedAt: new Date(),
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
