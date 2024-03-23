import { connectionToDatabase } from "../config/connection.js";
import userModel from "../models/user.model.js";
import { responseService } from "./response.service.js";

connectionToDatabase();

class UserService {
  async findOne(username) {
    try {
      const user = await userModel.findOne({ username });
      if (!user) return responseService.NotFound("User not found", user);
      return responseService.ok("User found", user);
    } catch (error) {
      return responseService.ErrorServer(undefined, error);
    }
  }

  async findById(id) {
    try {
      const user = await userModel.findById(id);
      if (!user) return responseService.NotFound("User not found", user);
      return responseService.ok("User found", user);
    } catch (error) {
      return responseService.ErrorServer(undefined, error);
    }
  }

  async create(data) {
    try {
      const created = await userModel.create(data);
      return responseService.created("User created!", created);
    } catch (error) {
      return responseService.ErrorServer(undefined, error);
    }
  }
}

export const userService = new UserService();
