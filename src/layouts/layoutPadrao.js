import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div>
      <header style={{ padding: '10px', background: '#0070f3', color: 'white' }}>
        <h1>Meu Site</h1>
      </header>
      <main style={{ margin: '20px' }}>{children}</main>
      <footer style={{ padding: '10px', background: '#f1f1f1', textAlign: 'center' }}>
        <p style={{ color: `black`}}>&copy; 2024 tsete site louco</p>
      </footer>
    </div>
  );
}
