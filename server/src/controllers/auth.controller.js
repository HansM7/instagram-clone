import { auhtService } from "../services/auth.service.js";
import { responseService } from "../services/response.service.js";

class AuthController {
  async loginController(req, res) {
    const data = req.body;
    const response = await auhtService.loginService(
      data.username,
      data.password
    );
    res.status(response.statusCode).json(response);
  }

  async signupController(req, res) {
    const data = req.body;
    const response = await auhtService.signupSerice(
      data.username,
      data.password
    );
    res.status(response.statusCode).json(response);
  }

  async meController(req, res) {
    const token = req.get("Authorization");
    if (token) {
      const response = await auhtService.meService(token);
      res.status(response.statusCode).json(response);
    } else {
      const resError = responseService.UnAuthorization("Token not found");
      res.status(resError.statusCode).json(resError.response);
    }
  }
}

export const auhtController = new AuthController();
