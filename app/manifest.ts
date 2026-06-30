import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Exotic Motorsports',
    short_name: 'Exotic Motorsports',
    description: 'Miami\'s premier clinical service facility for high-net-worth supercar assets. Precision. Experience. Detail.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#10FF00',
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
