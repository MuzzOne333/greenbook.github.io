import { useState } from 'react'
import { motion } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { animals } from '../data/animals'
import AnimalCard from './AnimalCard'
import Modal from './Modal'

const categories = ['All', 'Mammals', 'Birds', 'Reptiles']

export default function Gallery() {
  const [selected, setSelected] = useState<typeof animals[0] | null>(null)
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' 
    ? animals 
    : animals.filter(a => a.category === filter)

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <section className="py-12 px-4 bg-ngDark-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">Wildlife Stories</h2>
          <p className="text-gray-300 mt-2">Click on any animal to explore</p>
        </div>

        {/* Фильтры NG-style */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? 'bg-ngYellow-400 text-black shadow-lg'
                  : 'bg-ngDark-800 text-gray-300 hover:bg-ngDark-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6"
        >
          {filtered.map((animal, i) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-6"
            >
              <AnimalCard animal={animal} onClick={() => setSelected(animal)} />
            </motion.div>
          ))}
        </Masonry>
      </div>

      <Modal animal={selected} onClose={() => setSelected(null)} />
    </section>
  )
}