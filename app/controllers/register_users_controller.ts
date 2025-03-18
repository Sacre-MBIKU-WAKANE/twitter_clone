import User from '#models/user'
import { loginAuthValidator, registerAuthValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class RegisterUsersController {
  show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  showLogin({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }
  async register({ request, auth, response }: HttpContext) {
    const requestBody = request.body()

    const body = await registerAuthValidator.validate(requestBody)
    const user = await User.create(body)

    await auth.use('web').login(user)
    return response.redirect().toPath('/')
  }
  async login({ request, auth, response }: HttpContext) {
    const requestBody = request.body()
    const { email, password } = await loginAuthValidator.validate(requestBody)

    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return response.redirect().toPath('/')
  }
}
