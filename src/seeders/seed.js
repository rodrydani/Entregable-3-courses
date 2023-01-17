const db = require('../utils/database');

const Users = require('../models/users.models');
const UserCourses = require('../models/userCourses.model');
const Courses =require('../models/courses.models');
const Videos=require('../models/videos.models');
const Categories= require('../models/categories.models');
const initModels = require('../models/init.models');

const users =[
    {firstname:"rodrigo", lastname:"miranda", email:"rodrigo@gmail.com", password:"1234"},
    {firstname:"raul", lastname:"perez", email:"raul@gmail.com", password:"1235"},
    {firstname:"marta", lastname:"gonzalez", email:"marta@gmail.com", password:"1236"},
    {firstname:"julia", lastname:"martinez", email:"julia@gmail.com", password:"1237"},
]

const courses = [
    {title:"cocina",description:"aprende a cocinar",instructor:"sanchez"},
    {title:"programacion",description:"aprende a programar",instructor:"ian"},
    {title:"costura",description:"aprende a cocer",instructor:"marta"},
    {title:"react",description:"aprende react",instructor:"andres"},
];

const videos =[
    {title:"cocina-video", url:"cocina.mp4", courseId:1},
    {title:"programacion-video", url:"programacion.mp4", courseId:2},
    {title:"costura-video", url:"costura.mp4", courseId:3},
    {title:"react-video", url:"react.mp4", courseId:4},
];

const categories=[
{name:"programacion", courseId :2},
{ name: "hogar", courseId: 3 }, 
{ name: "cocina", courseId: 1 }, 
{ name: "librerias", courseId: 4 }

];

const Ucourses=[
    {courseId:1, userId:1},
    {courseId:2, userId:2},
    {courseId:3, userId:3},
    {courseId:4, userId:4},
];
db.sync({ force:true })
.then(()=>{
    console.log("iniciando....");
    users.forEach((user)=>Users.create(user));
    setTimeout(() => {
        courses.forEach((course) => Courses.create(course));
      }, 100);
  
      setTimeout(() => {
        categories.forEach((category) => Categories.create(category));
      }, 200);
  
      setTimeout(() => {
        videos.forEach((video) => Videos.create(video));
      }, 300);
  
      setTimeout(() => {
       Ucourses.forEach((userCourse) => UserCourses.create(userCourse));
      }, 400);
})
.catch((error)=>console.log(error))