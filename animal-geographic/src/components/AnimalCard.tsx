import type { Animal } from '../data/animals'

interface Props {
  animal: Animal
  onClick: () => void
}

export default function AnimalCard({ animal, onClick }: Props) {
  return (
    <div 
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={animal.image} 
            alt={animal.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800">{animal.title}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{animal.description}</p>
          <button className="mt-3 w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors text-sm font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}