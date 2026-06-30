import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Exotic Motorsports Service Center';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030303',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <svg width="200" height="120" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 40 }}>
          <path d="M10 50L30 20H70L90 50H75L60 28H40L25 50H10Z" fill="#10FF00" />
          <path d="M35 50L45 35H55L65 50H35Z" fill="#F1F5F9" />
        </svg>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: 72, fontWeight: 900, color: '#F1F5F9', margin: 0, textTransform: 'uppercase', letterSpacing: '-2px' }}>
            Exotic Motorsports
          </h1>
          <p style={{ fontSize: 32, fontWeight: 500, color: '#10FF00', marginTop: 10, textTransform: 'uppercase', letterSpacing: '4px' }}>
            Miami's Premier Clinical Service Facility
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
