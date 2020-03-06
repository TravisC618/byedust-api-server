const express = require("express");
const validateId = require("../middleware/validateId");
const authGuard = require("../middleware/authGuard");
const router = express.Router();

const { addTask, getAllTasks, getTask } = require("../controllers/tasks");

router.get("/", getAllTasks);
router.get("/:id", validateId, getTask);
router.post("/users/:userId", authGuard, validateId, addTask);

module.exports = router;
