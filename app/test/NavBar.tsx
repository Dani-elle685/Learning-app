import React from 'react'

const NavBar = () => {
  return (
      <div className="flex items-center justify-between px-8 py-4 border-b">

        {/* Left side: Logo + Navigation links */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <h1 className="font-bold text-lg">▲ NEXT.JS</h1>

          {/* Navigation menu */}
          <nav className="flex gap-4 text-sm text-gray-600">
            <span>Showcase</span>
            <span className="font-semibold text-black">Docs</span>
            <span>Blog</span>
            <span>Templates</span>
            <span>Enterprise</span>
          </nav>
        </div>

        {/* Right side: Search + Buttons */}
        <div className="flex items-center gap-3">

          {/* Search input */}
          <input
            placeholder="Search documentation..."
            className="border px-3 py-1 rounded text-sm"
          />

          {/* Feedback button */}
          <button className="border px-3 py-1 rounded text-sm">
            Feedback
          </button>

          {/* Learn button */}
          <button className="bg-black text-white px-3 py-1 rounded text-sm">
            Learn
          </button>
        </div>
      </div>
    
  )
}

export default NavBar
