import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5brgycci',
  dataset: 'production',
  apiVersion: '2022-10-03',
  token:
    'skfVb0saszZttQUpAzZlu0p8Vn4h1XfsxKqBU3T9c2PqWp6SxJXGy4eyWsNLMxh94KFU081h178l6S9ljMR7Ukmd6bvGNswhrLd9A7yBt7dMl6mSapargY2WCM7ZBbJEINhevJNKJ4rF48JQj1e0PHT5WwJOccy4YshZAfWC64NN55bqxK25',
  useCdn: false,
})