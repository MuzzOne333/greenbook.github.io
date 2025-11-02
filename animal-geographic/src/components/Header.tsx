export default function Header() {
  return (
    <nav className="bg-amber-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-bold text-amber-900">WildGeo</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-amber-700 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-amber-700 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-amber-700 font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}