import type { HttpContext } from '@adonisjs/core/http'

type Posts = {
  id: number
  IDUser: string
  contenu: string
  img: string
  date_pub: Date
}

const posts: Posts[] = [
  {
    id: 1,
    IDUser: 'CNN',
    contenu:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    img: '',
    date_pub: new Date(),
  },
]

export default class TweetControleursController {
  getPostHome(ctx: HttpContext) {
    return ctx.view.render('pages/home', { posts })
  }
  getProfil(ctx: HttpContext) {
    return ctx.view.render('pages/profil', {})
  }
}
