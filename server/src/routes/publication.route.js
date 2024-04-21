import express from "express";
import multer from "multer";
import jwt from "jsonwebtoken";
import { publicationService } from "../services/publication.service.js";
import { userService } from "../services/user.service.js";
import { publicationController } from "../controllers/publication.controller.js";
import path from "path";

const publicationRouter = express.Router();

const prefix = "/publications";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: async (req, file, cb) => {
    // todo definition validating token
    const token = req.get("Authorization");
    const responseToken = jwt.verify(token, "pepito");

    // todo get user

    const user = await userService.findById(responseToken.id);

    // todo register and capture id publication

    const responseCreated = await publicationService.create({
      user: user.response,
      description: req.body.description,
    });

    // todo define filename
    cb(
      null,
      responseCreated.response.id + "-" + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

publicationRouter.post(`${prefix}`, upload.single("image"));

publicationRouter.get(`${prefix}/image/:id`, publicationController.getImage);

publicationRouter.get(`${prefix}`);

export default publicationRouter;
