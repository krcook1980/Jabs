'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     const vaccine = await queryInterface.sequelize.query(
      `SELECT id from VACCINES;`
    );

    const vaccineRow = vaccine[0];
    await queryInterface.bulkInsert('Symptoms', [
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 1
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 2
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 3
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 4
      },
      {
        symptom: 'rash',
        duration: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 5
      },
      {
        symptom: 'fatigue',
        duration: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 6
      },
      {
        symptom: 'SAR',
        duration: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 7
      },
      {
        symptom: 'null',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 8
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 9
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 10
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 11
      },
      {
        symptom: 'fatigue',
        duration: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 12
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 13
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 14
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 15
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 16
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 17
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 18
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 19
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 20
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 21
      },
      {
        symptom: 'none',
        duration: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
        VaccineId: 22
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
