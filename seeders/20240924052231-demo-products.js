'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Laptop HP',
        description: 'Potente laptop HP Envy',
        image: 'HP_Envy.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HP Probook',
        description: 'HP Probook Ultima Generación',
        image: 'HP_Probook.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Plata']),
        price: 1200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dell Inspiron',
        description: 'Dell Inspiron',
        image: 'Dell_Inspiron.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Plata']),
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dell XPS',
        description: 'Potente Dell XPS',
        image: 'Dell_Inspiron.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 1200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dell XPS',
        description: 'Potente Dell XPS',
        image: 'Dell_Inspiron.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dell',
        description: 'Laptop Dell',
        image: 'Dell.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 1050,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenovo Ideapad',
        description: 'Nueva Lenovo Ideapad',
        image: 'Lenovo_Ideapad.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 1100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenovo Notebook',
        description: 'Lenovo Notebook',
        image: 'Lenovo_Netbook.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 1150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenovo Ideapad',
        description: 'Nueva Lenovo Ideapad',
        image: 'Lenovo_Ideapad.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 1050,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenovo Thinkpad',
        description: 'Nueva Lenovo Thinkpad',
        image: 'Lenovo_Ideapad.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro']),
        price: 975,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Macbook Air',
        description: 'Nueva Macbook Air',
        image: 'Macbook_Air.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Blanco']),
        price: 1400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Macbook Pro',
        description: 'Potente Macbook Pro',
        image: 'Macbook_Pro.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Blanco']),
        price: 1750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Macbook Air Pro',
        description: 'Nueva y Potente Macbook Air Pro',
        image: 'Macbook_Air_Pro.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Blanco']),
        price: 1750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laptop Acer',
        description: 'Laptop Acer',
        image: 'Laptop_Acer.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Blanco']),
        price: 1750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laptop Toshiba',
        description: 'Nueva Laptop Toshiba',
        image: 'Toshiba.png',
        category: 'Electrónica',
        colors: JSON.stringify(['Negro', 'Plata']),
        price: 1750,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
