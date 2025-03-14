import { users, tweets } from '../../resources/data/data.js';
export default class TweetControleursController {
    getPostHome(ctx) {
        let user;
        const tweetsResponses = tweets.map((tweet) => {
            const author = users.find((user) => user.IDuser === tweet.IDuser);
            if (author?.IDuser === 1)
                user = author;
            return {
                ...tweet,
                author,
            };
        });
        return ctx.view.render('pages/home', { tweetsResponses, singleUser: user });
    }
    getProfil(ctx) {
        const username = ctx.params.username;
        const user = users.find((user) => user.username === username);
        if (user) {
            const userTweets = tweets.filter((tweet) => tweet.IDuser === user.IDuser);
            const responseTweets = userTweets.map((tweet) => {
                return {
                    ...tweet,
                    user: user,
                };
            });
            return ctx.view.render('pages/profil', {
                singleUser: user,
                rTweets: responseTweets,
                tweetCount: userTweets.length,
            });
        }
    }
}
//# sourceMappingURL=tweet_controleurs_controller.js.map