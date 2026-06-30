import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050505',
        }}
      >
        <img
          src="https://theexoticmotorsports.vercel.app/logo.svg"
          alt="Exotic Motorsports"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20%',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
