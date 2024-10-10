const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('countries', [
      {
        id: uuidv4(),
        name: 'Argentina',
        symbol: 'AR',
        locale: 'es-AR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Bolívia',
        symbol: 'BO',
        locale: 'es-BO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Brasil',
        symbol: 'BR',
        locale: 'pt-BR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Chile',
        symbol: 'CL',
        locale: 'es-CL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Colômbia',
        symbol: 'CO',
        locale: 'es-CO',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Equador',
        symbol: 'EC',
        locale: 'es-EC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Paraguai',
        symbol: 'PY',
        locale: 'es-PY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Peru',
        symbol: 'PE',
        locale: 'es-PE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Suriname',
        symbol: 'SR',
        locale: 'nl-SR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Uruguai',
        symbol: 'UY',
        locale: 'es-UY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Venezuela',
        symbol: 'VE',
        locale: 'es-VE',
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
