const express= require("express");
const db = require('./utils/database');
const initModels = require('./models/init.models');
const app= express();
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const coursesRoutes= require('./routes/courses.routes');
const videosRoutes= require('./routes/videos.routes');
const userCoursesRoutes= require('./routes/userCourses.routes');
const categoriesRoutes= require('./routes/categories.routes');

app.use(express.json());
app.use(cors());


const PORT=8000;


db.authenticate()
.then(()=>console.log("autenticacion exitosa"))
.catch((error)=>console.log(error));

initModels();
db.sync({force:false})
    .then(()=>console.log("base de datos sincronizada"))
    .catch((error)=>console.log("error en base de datos"))

app.get("/" ,(req, res)=>{
    res.status(200).json({messege:"bienvenido al servidor"});
})

app.use("/api/v1", usersRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1",  userCoursesRoutes);
app.use("/api/v1", categoriesRoutes);

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
})

