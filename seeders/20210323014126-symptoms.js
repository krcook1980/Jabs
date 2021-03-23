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
     const vaccine = await queryInterface.sequelize.query(
      `SELECT id from VACCINE;`
    );

    const vaccineRow = user[0];
    await queryInterface.bulkInsert('Symptom', [
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'rash',
        duration: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'fatigue',
        duration: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'SAR',
        duration: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'null',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'fatigue',
        duration: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: vaccineRow[0].id
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
