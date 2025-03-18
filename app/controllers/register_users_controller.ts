import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterUsersController {
  show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  showLogin({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }
  async register({ request, auth, response }: HttpContext) {
    const requestBody = request.body()
    // On vient de récupérer les données de l'utilisateur
    // Les différentes données
    const { fullName, email, password } = requestBody
    const user = await User.create({ fullName, email, password })
    console.log({ user })

    await auth.use('web').login(user)
    return response.redirect().toPath('/')
  }
  async login({ request, auth, response }: HttpContext) {
    const requestBody = request.body()
    // On vient de récupérer les données de l'utilisateur
    // Les différentes données
    const { email, password } = requestBody
    console.log({ email })
    const user = await User.query().select('*').where('email', email)
    if (password === 12345 && user[0]) {
      await auth.use('web').login(user[0])
      return response.redirect().toPath('/')
    }
    return response.redirect().toPath('/auth/register/login')
  }
}
