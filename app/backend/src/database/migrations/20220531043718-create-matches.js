'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      home_team: {
        allowNull: false,
        type: Sequelize.NUMBER,
      },
      home_team_goals: {
        allowNull: false,
        type: Sequelize.NUMBER,
      },
      away_team: {
        allowNull: false,
        type: Sequelize.NUMBER,
      },
      away_team_goals: {
        allowNull: false,
        type: Sequelize.NUMBER,
      },
      in_progress: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  }
};