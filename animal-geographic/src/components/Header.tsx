export default function Header() {
  return (
    <nav className="bg-ngDark-900/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-bold text-white">WildGeo</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-ngYellow-400 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-ngYellow-400 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-ngYellow-400 font-medium transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}