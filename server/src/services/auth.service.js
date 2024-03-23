import { responseService } from "./response.service.js";
import { userService } from "./user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
  async loginService(username, password) {
    // todo verificar si el usuario existe
    const responseUser = await userService.findOne(username);
    // todo si el usuario no existe mandar error
    if (!responseUser.ok) return responseUser;
    // todo si el usuario existe comparar las contraseñas
    if (!bcrypt.compareSync(password, responseUser.response.password))
      // todo si las contraseñas no coinciden mandar un error
      return responseService.UnAuthorization();
    // todo si las contraseñas coinciden mandar el token
    // todo creamos el formato  del token
    const formatToken = {
      id: responseUser.response._id,
    };
    // todo creamos el token
    const token = jwt.sign(formatToken, "pepito");
    // todo enviamos el token
    return responseService.ok("Login ok", { token });
  }

  async signupSerice(username, password) {
    try {
      // todo verificar si el usuario existe
      const responseUser = await userService.findOne(username);
      // todo si el usuario existe mandar error por duplicacion de registros
      if (responseUser.ok)
        return responseService.BadRequest("User already exists");

      const newPassword = bcrypt.hashSync(password, 11);

      const resCreated = await userService.create({
        username,
        password: newPassword,
      });

      const formatToken = {
        id: resCreated.response._id,
      };
      // todo creamos el token
      const token = jwt.sign(formatToken, "pepito");
      // todo enviamos el token
      return responseService.ok("Signup ok", { token });
    } catch (error) {
      console.log(error);
      return responseService.ErrorServer(undefined, error);
    }
  }

  async meService(token) {
    try {
      const resToken = jwt.verify(token, "pepito");
      if (!resToken) return responseService.UnAuthorization("Not authorized");
      // verificar si el usuario existe
      return responseService.ok("User authorization");
    } catch (error) {
      return responseService.ErrorServer(undefined, error);
    }
  }
}

export const auhtService = new AuthService();
