import type { HttpContext } from '@adonisjs/core/http'
import { users, tweets } from '../../resources/data/data.ts'

// type Posts = {
//   id: number
//   IDUser: string
//   contenu: string
//   img: string
//   date_pub: Date
// }

// const posts: Posts[] = [
//   {
//     id: 1,
//     IDUser: 'CNN',
//     contenu:
//       'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.',
//     img: '',
//     date_pub: new Date(),
//   },
// ]

export default class TweetControleursController {
  getPostHome(ctx: HttpContext) {
    const tweetsResponse = tweets.find((tweet) => {
      const author = users.find((user) => user.IDuser === tweet.IDuser)
      return {
        ...tweet,
        author,
      }
    })
    return ctx.view.render('pages/home', { tweetsResponse })
  }
  getProfil(ctx: HttpContext) {
    return ctx.view.render('pages/profil', {})
  }
}
