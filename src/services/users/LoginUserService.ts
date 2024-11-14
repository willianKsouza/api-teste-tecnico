export class LoginUserService {
    LoginUserRepository;
    constructor(loginUserRepository) {
      this.LoginUserRepository = loginUserRepository;
    }
    async login(email,password) {
      try {
  
        const product =
          await this.LoginUserRepository.login(email,password);
  
        return product;
      } catch (error) {
        throw new Error(error);
      }
    }
  }