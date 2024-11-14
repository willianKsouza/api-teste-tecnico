import { CreateProductDTO } from "../../DTOs/CreateProductDTO";
import { Request } from "express";
import { REMOVE } from "payload/dist/admin/components/forms/Form/types";

export class LoginUserController {
  LoginUserService;
  constructor(loginUserService) {
    this.LoginUserService = loginUserService;
  }

  async index(req, res) {
    try {
      const { email, password } = req.body;

      const user = await this.LoginUserService.login(email, password);
      console.log(user);
      
      return res.status(201).json({ success: true });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json({ success: false, data: error.message });
    }
  }
}
