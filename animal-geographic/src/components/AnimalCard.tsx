import type { Animal } from '../data/animals'

interface Props {
  animal: Animal
  onClick: () => void
}

export default function AnimalCard({ animal, onClick }: Props) {
  return (
    <div onClick={onClick} className="group cursor-pointer relative overflow-hidden">
      <img
        src={animal.image}
        alt={animal.title}
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ng-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <div>
          <h3 className="text-2xl font-bold text-ng-light mb-2">{animal.title}</h3>
          <p className="text-ng-gray text-sm">{animal.description}</p>
          <span className="inline-block mt-3 px-3 py-1 bg-ng-yellow text-black text-xs font-bold uppercase">
            {animal.category}
          </span>
        </div>
      </div>
    </div>
  )
}