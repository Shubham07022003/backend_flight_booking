'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Enums} = require('../utils/common');
const {BOOKED , PENDING ,  CANCELED,  INITIATED } = Enums.BOOKING_SERVICES
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      status: {
        type: Sequelize.ENUM,
        values: [BOOKED , PENDING ,  CANCELED,  INITIATED ],
        defaultValue: INITIATED ,
        allowNull: false,

      },
      noofSeats:{
        type: Sequelize.INTEGER ,
        defaultValue: 1 ,
        allowNull: false,
      },
      totalCost: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};