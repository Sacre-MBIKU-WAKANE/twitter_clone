import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutsController {
  logout({ response, auth }: HttpContext) {
    auth.use('web').logout()
    return response.redirect().toPath('/')
  }
}
