const router = require("express").Router();
const UserController = require("../controller/UserController");

router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUser);
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
