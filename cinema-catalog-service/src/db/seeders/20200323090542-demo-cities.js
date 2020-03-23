'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cities', [
      {
        id: 1,
        name: "Винница"
      }, 
      {
        id: 2,
        name: "Кропивницкий"
      }, 
      {
        id: 3,
        name: "Полтава"
      }, 
      {
        id: 4,
        name: "Харьков"
      },
      {
        id: 5,
        name: "Днепр"
      },
      {
        id: 6,
        name: "Луганск"
      },
      {
        id: 7,
        name: "Ровно"
      },
      {
        id: 8,
        name: "Херсон"
      },
      {
        id: 9,
        name: "Донецк"
      },
      {
        id: 10,
        name: "Луцк"
      },
      {
        id: 11,
        name: "Симферополь"
      },
      {
        id: 12,
        name: "Хмельницкий"
      },
      {
        id: 13,
        name: "Житомир"
      },
      {
        id: 14,
        name: "Львов"
      },
      {
        id: 15,
        name: "Сумы"
      },
      {
        id: 16,
        name: "Черкассы"
      },
      {
        id: 17,
        name: "Запорожье"
      },
      {
        id: 18,
        name: "Николаев"
      },
      {
        id: 19,
        name: "Тернополь"
      },
      {
        id: 20,
        name: "Чернигов"
      },
      {
        id: 21,
        name: "Ивано-Франковск"
      }, 
      {
        id: 22,
        name: "Одесса"
      },
      {
        id: 23,
        name: "Ужгород"
      },
      {
        id: 24,
        name: "Черновцы"
      },
      {
        id: 25,
        name: "Киев"
      },
      {
        id: 26,
        name: "Кривой-рог"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Cities', null, {});
    
  }
};
