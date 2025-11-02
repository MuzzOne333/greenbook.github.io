import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'

const slides = [
  {
    image: "/images/MM9392_200927_069070.avif",
    title: "Explore the Wild",
    subtitle: "Discover wildlife across the globe"
  },
  {
    image: "/images/inpics_brazil_OM10511-Enhanced-SR-copy_ukHR_4x3.avif",
    title: "Jaguar Kingdom",
    subtitle: "The Pantanal's hidden predators"
  },
  {
    image: "/images/22-8955001_uploadsmember479708yourshot-479708-8955001jpg_yp6byshipqf2ntxys2ntam5en3p3eflutfvvbpyjwjhzlmh4iziq_4617x3073.avif",
    title: "River Giants",
    subtitle: "Hippos of Brazil"
  },
]

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3 
        }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <h2 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-6">{slide.subtitle}</p>
                  <button className="ng-btn">
                    Explore Now
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}