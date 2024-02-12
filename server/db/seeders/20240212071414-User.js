"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Командир БибаБоба",
          email: "biba@boba.ru",
          password: await bcrypt.hash("123", 10),
          img: "https://cdnb.artstation.com/p/assets/images/images/016/657/059/large/alexandr-erohov-khorn-ava.jpg?1552981463",
          isAdmin: false,
          city: "Сургут",
          contact: "+79123123123",
          birthDate: "09.07.1995",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Admin",
          email: "admin@posttwit.ru",
          password: "admin123",
          img: "https://www.cariblist.com/admin/assets/img/UserLogos/1473851754-avatar-generic.jpg",
          isAdmin: true,
          city: "Санкт-Петербург",
          contact: "www.postTwit.ru",
          birthDate: "09.02.2024",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Жабка Вася",
          email: "vasya@zhabka.ru",
          password: await bcrypt.hash("123", 10),
          img: "https://ipwatchdog.com/wp-content/uploads/2018/03/pepe-the-frog-1272162_640.jpg",
          isAdmin: false,
          city: "Москва",
          contact: "+79456456456",
          birthDate: "14.05.1993",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
