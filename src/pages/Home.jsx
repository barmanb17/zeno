import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zeno.ai</h1>
        <p className="text-center text-lg text-gray-600 mb-16">Your AI-powered creative assistant</p>
        
        {/* Add scrollable content to test the navbar resize */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-6 h-64">
              <h3 className="text-xl font-semibold mb-4">Feature {i + 1}</h3>
              <p className="text-gray-600">
                This is a demo card to show scrollable content. The navbar should resize when you scroll down.
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-8">Scroll up and down to see the navbar resize!</h2>
          <p className="text-gray-600 text-lg">
            The navbar will become more compact and get a background blur when you scroll down past 100px.
          </p>
        </div>
        
        {/* More content for scrolling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-8 h-48">
              <h3 className="text-xl font-semibold mb-4">More Content {i + 1}</h3>
              <p className="text-gray-600">
                Additional scrollable content to demonstrate the navbar resizing effect.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home