/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import TweetControleursController from '#controllers/tweet_controleurs_controller'
import LogoutsController from '#controllers/logouts_controller'
import RegisterUsersController from '#controllers/register_users_controller'
import router from '@adonisjs/core/services/router'
const TweetControleursController = () => import('#controllers/tweet_controleurs_controller')

// router.on('/').render('pages/home')
router.get('/', [TweetControleursController, 'getPostHome'])
router.get('/:username', [TweetControleursController, 'getProfil'])
router.get('/auth/register', [RegisterUsersController, 'show']).as('register.show')
router.post('/auth/register', [RegisterUsersController, 'register']).as('register.create')
router.post('/auth/login', [RegisterUsersController, 'login'])
router.get('/auth/register/login', [RegisterUsersController, 'showLogin'])
router.post('/auth/logout', [LogoutsController, 'logout']).as('logout')
