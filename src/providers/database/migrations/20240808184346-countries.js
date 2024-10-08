'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Countries', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      symbol: {
        type: Sequelize.STRING(2), // Código do país, ex: BR, US
        allowNull: false,
        unique: true, // Para garantir que o símbolo seja único
      },
      locale: {
        type: Sequelize.STRING(5), // Exemplo: pt-BR, en-US
        allowNull: false,
        unique: true, // Cada localidade deve ser única
      },
      flag: {
        type: Sequelize.STRING, // URL da bandeira do país
        allowNull: true,
      },
      continentId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Continents', // Nome da tabela de continentes
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Countries');
  },
};
