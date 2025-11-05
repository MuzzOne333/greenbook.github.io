import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const slides = [
  { image: "/images/MM9392_200927_069070.avif", title: "The Last Wild Places", subtitle: "Where nature still rules" },
  { image: "/images/inpics_brazil_OM10511-Enhanced-SR-copy_ukHR_4x3.avif", title: "Jaguar's Realm", subtitle: "Heart of the Pantanal" },
  { image: "/images/22-8955001_uploadsmember479708yourshot-479708-8955001jpg_yp6byshipqf2ntxys2ntam5en3p3eflutfvvbpyjwjhzlmh4iziq_4617x3073.avif", title: "River Lords", subtitle: "Hippos of the Amazon" },
  { image: "/images/placeholder1.avif", title: "Arctic Survivors", subtitle: "Polar bears on thin ice" },
  { image: "/images/placeholder2.avif", title: "Wings of Freedom", subtitle: "Eagles over the Rockies" },
  { image: "/images/placeholder3.avif", title: "Ocean Giants", subtitle: "Whales in the deep" },
  { image: "/images/placeholder4.avif", title: "Desert Spirits", subtitle: "Life in the Sahara" },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-ng-black">
      <motion.div style={{ y }} className="absolute inset-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          loop={true}
          className="h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ng-black via-transparent to-ng-black/50" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-ng-light z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="ng-title"
          >
            Explore the Animal Kingdom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="ng-subtitle"
          >
            From the deepest oceans to the highest peaks — discover wildlife like never before.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <button className="ng-btn">Start Exploring</button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}