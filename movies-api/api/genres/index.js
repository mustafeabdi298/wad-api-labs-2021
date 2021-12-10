import express from "express";
//import {genres} from "./genresData";
import Genre from "./genreModel";
//import asyncHandler from "express-async-handler";

const router = express.Router();

/*router.get("/", (req, res) => {
    res.json(genres);
});
*/

router.get("/", async(req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

export default router;