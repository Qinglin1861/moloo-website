export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#FFFFFF', 
      color: '#000000',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>MOLOO</h1>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem', opacity: 0.7 }}>
        Strategy · Space · Dialogue
      </p>
      <button 
        style={{ 
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          border: '1px solid #000',
          background: 'transparent',
          color: '#000',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
        onClick={() => alert('Explore Projects')}
      >
        Explore Projects
      </button>
      <footer style={{ 
        position: 'absolute', 
        bottom: '2rem', 
        opacity: 0.5 
      }}>
        © 2026 MOLOO. All rights reserved.
      </footer>
    </div>
  );
}
Update homepage to minimalist design
