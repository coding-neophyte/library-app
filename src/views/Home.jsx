import React from 'react'

export default function Home() {
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        {' '}
        Welcome to Library{' '}
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/book-pic.jpeg" alt="book" />
      </div>
    </div>
  )
}
