import router from '@adonisjs/core/services/router';
const TweetControleursController = () => import('#controllers/tweet_controleurs_controller');
router.get('/', [TweetControleursController, 'getPostHome']);
router.get('/:username', [TweetControleursController, 'getProfil']);
//# sourceMappingURL=routes.js.map