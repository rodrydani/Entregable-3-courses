const db = require("../utils/database");
const { DataTypes }= require("sequelize");
const Users = require("./users.models");
const Courses = require('./courses.models')
const usersCourses = db.define("users_courses",{
  id:{
    primaryKey:true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
 courseId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
    references:{
      model:Courses,
      key:"id"
    }
 },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    references:{
      model:Users,
      key:"id"
    }
  },

});

module.exports= usersCourses;