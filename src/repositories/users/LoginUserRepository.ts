import payload from "payload";

export class LoginUserRepository {
  async login(email,password) {
    try {
        const user = await payload.login({
            collection: 'users',
            data: {
              email: email,
              password: password,
            },
          })

          return user
    } catch (error) {
        throw new Error(error.message)
    }
  }
}
