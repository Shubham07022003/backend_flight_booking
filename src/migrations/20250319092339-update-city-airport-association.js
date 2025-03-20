'use strict';

const { Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addConstraint('Airports', 'cityId', {
    type: 'foriegn key',
    references: {
      Model: 'Cities',
      key: 'id'
    },
    onUpdate: 'CASSCADE',
    onDelete: 'CASCADE'
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint()
   
  }
};
