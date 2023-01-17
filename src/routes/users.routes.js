const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,

} = require("../controllers/users.controllers");

const router = Router();

// app.get
// app.post
// app.put
// app.delete

// localhost:8000/users
// controlador
router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);



router.post("/users", createUser);

router.put("/users/:id", updateUser);



module.exports = router;