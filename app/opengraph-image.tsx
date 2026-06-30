import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Exotic Motorsports Service Center';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          fontFamily: 'sans-serif',
          position: 'relative',
          padding: '0 80px',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <img
          src="https://theexoticmotorsports.vercel.app/logo.svg"
          alt="Exotic Motorsports Logo"
          style={{
            width: '280px',
            height: '280px',
            marginRight: '60px',
            borderRadius: '24px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
          }}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', maxWidth: '650px' }}>
          <h1 style={{ fontSize: 64, fontWeight: 900, color: '#F1F5F9', margin: 0, textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 1.1 }}>
            Exotic Motorsports
          </h1>
          <p style={{ fontSize: 24, fontWeight: 500, color: '#10FF00', marginTop: 15, textTransform: 'uppercase', letterSpacing: '4px' }}>
            Miami&apos;s Premier Service Center
          </p>
          <p style={{ fontSize: 20, color: '#94A3B8', marginTop: 10, lineHeight: 1.4 }}>
            Clinical grade diagnostics, maintenance, and precision tuning for luxury, exotic, and hypercar platforms.
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
