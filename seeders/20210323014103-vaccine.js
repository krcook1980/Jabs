'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    const user = await queryInterface.sequelize.query(
      `SELECT id from USERS;`
    );

    const userRow = user[0];

    await queryInterface.bulkInsert('Vaccines', [
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 9,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 9,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 10,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 10,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 11,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 11,
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
