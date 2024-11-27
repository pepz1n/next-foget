import React from 'react';

export default function Button({ text, onClick, style, disabled = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: disabled ? '#ccc' : '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
