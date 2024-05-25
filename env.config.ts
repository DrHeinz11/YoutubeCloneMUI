const ENV: string = import.meta.env.VITE_ENV

const defaultConfig = {
  apiKey: '',
  apiHost: '',
  baseUrl: '',
  searchPath: (search: string) => `search?query=${search}`
}

const config =
  {
    PRODUCTION: {
      apiKey: import.meta.env.VITE_API_KEY,
      apiHost: import.meta.env.VITE_API_HOST,
      baseUrl: import.meta.env.VITE_BASE_URL,
      searchPath: (search: string) => `search?q=${search}&part=id%2Csnippet&maxResults=50`
    },
    DEV: {
      apiKey: import.meta.env.VITE_API_KEY_DEV,
      apiHost: import.meta.env.VITE_API_HOST_DEV,
      baseUrl: import.meta.env.VITE_BASE_URL_DEV,
      searchPath: (search: string) => `search?query=${search}`
    }
  }[ENV] || defaultConfig

if (!config) {
  throw new Error(`Unknown environment: ${ENV}`)
}

export { ENV, config }
