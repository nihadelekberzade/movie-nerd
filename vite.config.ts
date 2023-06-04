import { sveltekit } from '@sveltejs/kit/vite'
import { loadEnv } from 'vite'

export default function defineConfig(mode: any) {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [sveltekit()],
    server: {
      proxy: {
        '/api': {
          target: 'https://moviesdatabase.p.rapidapi.com',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
}
