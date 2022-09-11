import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import optimizer from 'vite-plugin-optimizer'

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        // optimizer({
        //     path: `const path = window.require && window.require('path'); export { path as default }`,
        // }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'utils': path.resolve(__dirname, './src', 'utils'),
            'assets': path.resolve(__dirname, './src', 'assets'),
        },
    },
    build: {
        sourcemap: false,
        chunkSizeWarningLimit: 102400,
        emptyOutDir: true,
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
            }
        }
    }
})
