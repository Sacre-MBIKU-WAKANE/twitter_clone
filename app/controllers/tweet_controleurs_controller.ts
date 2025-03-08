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
  getProfil(ctx: HttpContext) {
    const username = ctx.params.username
    const user = users.find((user) => user.username === username)

    if (user) {
      // console.log('ok')

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

    // const userTweets = tweets.filter((tweet) => {
    //   const author = users.find((user) => user.IDuser == tweet.IDuser)
    //   console.log(`iduser:${author?.IDuser} ${tweet.IDuser} `)

    //   return {
    //     ...tweet,
    //     author,
    //   }
    // })
  }
}
