import type { Animal } from '../data/animals'

interface Props {
  animal: Animal | null
  onClose: () => void
}

export default function Modal({ animal, onClose }: Props) {
  if (!animal) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-4xl w-full my-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img src={animal.image} alt={animal.title} className="w-full h-96 object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800">{animal.title}</h3>
          <p className="text-gray-600 mt-3">{animal.description}</p>
          <p className="mt-4 text-sm font-medium text-amber-600">Category: {animal.category}</p>
        </div>
      </div>
    </div>
  )
}