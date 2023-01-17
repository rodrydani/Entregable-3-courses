const Users= require('./users.models');
const Courses =require('./courses.models');
const usersCourses = require('../models/userCourses.model');
const Categories = require('./categories.models');
const Videos = require('./videos.models');

const initModels=()=>{

usersCourses.belongsTo(Users,{as:"author", foreignKey:"user_id"});
Users.hasMany(usersCourses,{as:"authorCourse", foreignKey:"user_id"});

usersCourses.belongsTo(Courses,{as:"courses", foreignKey:"course_id"})
Courses.hasMany(usersCourses,{as:"authorCourse", foreignKey:"course_id"})
}

Categories.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
Courses.hasMany(Categories, { as: "category", foreignKey: "course_id" });

Videos.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
Courses.hasMany(Videos, { as: "video", foreignKey: "course_id" });

module.exports= initModels;