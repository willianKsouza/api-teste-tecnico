import { LoginUserController } from "@/controllers/users/LoginUserController";
import { LoginUserRepository } from "@/repositories/users/LoginUserRepository";
import { LoginUserService } from "@/services/users/LoginUserService";

const repository = new LoginUserRepository()
const service = new LoginUserService(repository)
const loginUserController = new LoginUserController(service)

export {loginUserController}