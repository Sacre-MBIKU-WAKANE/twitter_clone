/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import TweetControleursController from '#controllers/tweet_controleurs_controller'
import router from '@adonisjs/core/services/router'
const TweetControleursController = () => import('#controllers/tweet_controleurs_controller')
router.on('/').render('pages/home')
router.get('username', [TweetControleursController, 'getProfil'])
router.get('userTweet/:idUser', [TweetControleursController, 'getPostHome'])
