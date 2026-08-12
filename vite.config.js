import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5173,

        // URL que utilizará el navegador
        origin: 'http://localhost:5173',

        // Permitir que Laravel en el puerto 8000 cargue Vite
        cors: {
            origin: 'http://localhost:8000',
        },

        hmr: {
            host: 'localhost',
            port: 5173,
        },
    },

    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),

        vue(),
    ],
});
