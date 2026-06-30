import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          padding: '24px',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 50L30 20H70L90 50H75L60 28H40L25 50H10Z"
            fill="#10FF00"
          />
          <path
            d="M35 50L45 35H55L65 50H35Z"
            fill="#F1F5F9"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
