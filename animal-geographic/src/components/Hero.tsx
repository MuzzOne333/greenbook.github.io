export default function Hero() {
    return (
        <div className="relative h-96 overflow-hidden">
            <img 
                src="/images/MM9392_200927_069070.avif" 
                alt="Desert fox" 
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white max-w-2xl">
                <h2 className="text-5xl font-bold mb-2">Explore the Wild</h2>
                <p className="text-lg">Discover the beauty of wildlife across the globe</p>
            </div>
        </div>
    )
}