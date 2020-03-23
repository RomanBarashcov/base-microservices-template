module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('MovieSchedules', [
      { 
          movieId: 1,
          roomId:1,
          seatsEmpty: [2,3,4,5,6,7,8,9,10],
          seatsOccupied: [1],
          time: new Date(),
          price: 100
    
        }, 
        { 
          movieId: 2,
          roomId: 3,
          seatsEmpty: [1,2,3,4,7,8,9,10],
          seatsOccupied: [5,6],
          time: new Date(),
          price: 130
    
        }, 
        { 
          movieId: 3,
          roomId: 2,
          seatsEmpty: [1,4,7,8,9,10],
          seatsOccupied: [2,3,5,6],
          time: new Date(),
          price: 120
    
        },
        { 
          movieId: 4,
          roomId: 3,
          seatsEmpty: [1,4,9,10],
          seatsOccupied: [2,3,5,6,7,8],
          time: new Date(),
          price: 120
    
        },
        { 
          movieId: 5,
          roomId: 4,
          seatsEmpty: [1,4,9,10],
          seatsOccupied: [2,3,5,6,7,8],
          time: new Date(),
          price: 150
    
        },
      ], {});
      },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('MovieSchedules', null, {});
    
  }
};
