module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Cinemas', [
      {
          name: "ЦУМ",
          latitude: "0000000",
          longitude: "0000000",
          cityId: 25
      },{
          name: "Lavina IMAX Лазер",
          latitude: "0000000",
          longitude: "0000000",
          cityId: 25
      },
      {
          name: "SkyMall",
          latitude: "0000000",
          longitude: "0000000",
          cityId: 25
      },
      {
        name: "Проспект",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 25
      },
      {
        name: "Атмосфера",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 25
      },
      {
        name: "Караван",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 25
      },
      {
        name: "Komod",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 25
      },
      {
        name: "Retroville",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 25
      },
      {
        name: "Караван",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 5
      },
      {
        name: "Дафи IMAX",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 5
      },
      {
        name: "Victoria Gardens",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 14
      },
      {
        name: "Spartak",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 14
      },
      {
        name: "Gagarinn Plaza",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 22
      },
      {
        name: "Riviera",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 22
      },
      {
        name: "Аврора",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 17
      },
      {
        name: "City Center",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 18
      },
      {
        name: "Фабрика",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 8
      },
      {
        name: "Дафи",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 4
      },
      {
        name: "Оазис",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 12
      }, {
        name: "Глобал UA",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 13
      }, {
        name: "Victory Plaza",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 26
      },
      {
        name: "Union",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 26
      },
      {
        name: "ПортCity",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 17
      },
      {
        name: "ЭРА",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 7
      },
      {
        name: "Hollywood",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 20
      },
      {
        name: "Union",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 26
      },
      {
        name: "Проминь",
        latitude: "0000000",
        longitude: "0000000",
        cityId: 10
      },
      
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Cinemas', null, {});

  }
};
