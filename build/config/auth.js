import { defineConfig } from '@adonisjs/auth';
import { basicAuthGuard, basicAuthUserProvider } from '@adonisjs/auth/basic_auth';
const authConfig = defineConfig({
    default: 'basicAuth',
    guards: {
        basicAuth: basicAuthGuard({
            provider: basicAuthUserProvider({
                model: () => import('#models/user')
            }),
        }),
    },
});
export default authConfig;
//# sourceMappingURL=auth.js.map