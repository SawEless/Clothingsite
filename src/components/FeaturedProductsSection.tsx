import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Camera } from 'lucide-react'

const products = [
  { id: 1, name: 'AI-Designed Blazer', price: 199.99, image: '/placeholder.svg?height=400&width=300', rating: 4.8, reviews: 120 },
  { id: 2, name: 'Smart Fabric Shirt', price: 89.99, image: '/placeholder.svg?height=400&width=300', rating: 4.6, reviews: 95 },
  { id: 3, name: 'Eco-Tech Jeans', price: 129.99, image: '/placeholder.svg?height=400&width=300', rating: 4.9, reviews: 150 },
  { id: 4, name: 'Adaptive Sneakers', price: 159.99, image: '/placeholder.svg?height=400&width=300', rating: 4.7, reviews: 110 },
]

interface FeaturedProductsSectionProps {
  isDarkMode: boolean
}

export default function FeaturedProductsSection({ isDarkMode }: FeaturedProductsSectionProps) {
  return (
    <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          AI-Curated Collection
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full p-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-purple-600"
                  >
                    <Camera className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{product.name}</h3>
                <p className="text-purple-600 font-bold mb-2">${product.price.toFixed(2)}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className={`ml-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{product.rating} ({product.reviews} reviews)</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}