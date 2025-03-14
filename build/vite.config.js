import { defineConfig } from 'vite';
import adonisjs from '@adonisjs/vite/client';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    plugins: [
        tailwindcss(),
        adonisjs({
            entrypoints: ['resources/css/app.css', 'resources/js/app.js'],
            reload: ['resources/views/**/*.edge'],
        }),
    ],
});
//# sourceMappingURL=vite.config.js.map