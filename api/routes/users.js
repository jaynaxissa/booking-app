import express from "express";
import {
  updateUser,
  deleteUser,
  getAUser,
  getAllUsers,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

//UPDATE

router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET

router.get("/:id", verifyUser, getAUser);

//GET ALL

router.get("/", verifyAdmin, getAllUsers);

export default router;
