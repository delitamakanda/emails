// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'nuxt-lucide-icons'
  ],
  image: {
    quality: 80,
    formats: ['avif', 'jpeg', 'png'],
    domains: ['https://example.com'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1920,
      '2xl': 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'png',
          width: 200,
          height: 200,
          fit: 'cover',
          background: '#fff',
          border: '2px solid #ccc',
        }
      }
    },
    dir: 'assets/images',
    routeRules: {
      '/': {
        middleware: ['auth']
      }
    }
  },
  shadcn: {
    prefix: '',
    componentDir: 'components/ui',
  }
})