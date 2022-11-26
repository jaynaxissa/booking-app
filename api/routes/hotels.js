import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAHotel,
  getAllHotels,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE

router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getAHotel);

//GET ALL

router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
