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
    const user = await queryInterface.sequelize.query(
      `SELECT id from USER;`
    );

    const userRow = user[0];

    await queryInterface.bulkInsert('Vaccine', [
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Moderna',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: true,
        shot_two: false,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
      },
      {
        vaccine_type: 'Pfizer',
        shot_one: false,
        shot_two: true,
        createdAt: new Date(),
        updatedAt: new Date()
        UserId: userRow[0].id,
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
