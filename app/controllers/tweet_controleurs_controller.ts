import type { HttpContext } from '@adonisjs/core/http'
import { users, tweets } from '../../resources/data/data.ts'

// class controleur tweet
export default class TweetControleursController {
  // methode permettant d'afficher les tweets sur la page d'accueil
  getPostHome(ctx: HttpContext) {
    const tweetsResponses = tweets.map((tweet) => {
      const author = users.find((user) => user.IDuser === tweet.IDuser)

      return {
        ...tweet,
        author,
      }
    })
    // console.log(tweetsResponses)
    return ctx.view.render('pages/home', { tweetsResponses })
  }

  // methode permettant d'afficher les tweets correspondant à un utilisateur avec ses propre tweet
  getProfil(ctx: HttpContext) {
    const username = ctx.params.username
    const user = users.find((user) => user.username === username)

    if (user) {
      const userTweets = tweets.filter((tweet) => tweet.IDuser === user.IDuser)

      const responseTweets = userTweets.map((tweet) => {
        return {
          ...tweet,
          user: user,
        }
      })

      // console.log(responseTweets)

      return ctx.view.render('pages/profil', {
        singleUser: user,
        rTweets: responseTweets,
        tweetCount: userTweets.length,
      })
    } else {
      console.log('not found')
    }
  }
}
