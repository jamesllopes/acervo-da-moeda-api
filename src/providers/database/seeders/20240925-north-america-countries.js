const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('countries', [
      {
        id: uuidv4(),
        name: 'Canadá',
        symbol: 'CA',
        locale: 'en-CA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Estados Unidos',
        symbol: 'US',
        locale: 'en-US',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'México',
        symbol: 'MX',
        locale: 'es-MX',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Groenlândia',
        symbol: 'GL',
        locale: 'kl-GL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Ilhas Faroé',
        symbol: 'FO',
        locale: 'fo-FO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const [results] = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM countries',
    );

    if (results[0].count === 0) {
      // Apenas insira se não houver dados
      await queryInterface.bulkInsert('countries', [
        ...countries.map((country) => ({
          ...country,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
      ]);
    } else {
      console.log('Os países já foram inseridos, pulando o seeder.');
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('countries', null, {});
  },
};
