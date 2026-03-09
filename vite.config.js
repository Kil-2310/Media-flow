import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'

export default defineConfig(({ mode }) => {
    const isProd = mode === 'production'

    return {
        root: 'frontend',
        server: {
            port: 3000,
            open: true
        },
        build: {
            outDir: '../dist',
            emptyOutDir: true,
            assetsDir: 'assets',
            rollupOptions: {
                input: path.resolve(__dirname, 'frontend/index.html')
            }
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('frontend/src', import.meta.url))
            }
        },
        base: isProd ? '/Kursk-region-site/' : '/',
    }
})