import { useState } from 'react'
import { motion } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { animals } from '../data/animals'
import AnimalCard from './AnimalCard'
import Modal from './Modal'

const categories = ['All', 'Mammals', 'Birds', 'Reptiles', 'Marine']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<typeof animals[0] | null>(null)

  const filtered = filter === 'All' ? animals : animals.filter(a => a.category === filter)

  return (
    <section className="py-16 px-4 bg-ng-black text-ng-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Featured Stories</h2>
          <p className="text-ng-gray mt-4 text-lg">Handpicked wildlife journeys</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-semibold transition-all ${
                filter === cat
                  ? 'bg-ng-yellow text-black'
                  : 'text-ng-gray hover:text-ng-light border border-ng-gray/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <Masonry breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }} className="flex -ml-4">
          {filtered.map((animal, i) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="pl-4 mb-8"
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