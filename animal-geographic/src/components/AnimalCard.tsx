import type { Animal } from '../data/animals'

interface Props {
  animal: Animal
  onClick: () => void
}

export default function AnimalCard({ animal, onClick }: Props) {
  return (
    <div 
      className="group cursor-pointer relative overflow-hidden rounded-xl shadow-xl"
      onClick={onClick}
    >
      <img 
        src={animal.image} 
        alt={animal.title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      {/* NG-overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
        <h3 className="font-bold text-xl text-white mb-2">{animal.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{animal.description}</p>
        <button className="ng-btn w-max">
          Learn More
        </button>
      </div>
      <div className="absolute top-4 right-4 bg-ngYellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        {animal.category}
      </div>
    </div>
  )
}