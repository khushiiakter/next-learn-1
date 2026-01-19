import React from 'react'

const Footer = () => {
  return (
    <footer className="glass-card mx-4 mb-4 mt-8">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">NextApp</h3>
            <p className="text-sm opacity-75">Building amazing experiences with Next.js</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="/" className="hover:text-violet-300 transition-colors">Home</a></li>
              <li><a href="/posts" className="hover:text-violet-300 transition-colors">Posts</a></li>
              <li><a href="/users" className="hover:text-violet-300 transition-colors">Users</a></li>
              <li><a href="/meals" className="hover:text-violet-300 transition-colors">Meals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="/todos" className="hover:text-violet-300 transition-colors">Todo Manager</a></li>
              <li><a href="/services" className="hover:text-violet-300 transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-violet-300 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-xs">📧</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-violet-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-xs">🐦</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-xs">💼</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-violet-200/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-75">
            © 2024 NextApp. Made with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
