import { motion } from 'framer-motion'
import Image from 'next/image'

interface SustainabilitySectionProps {
  isDarkMode: boolean
}

export default function SustainabilitySection({ isDarkMode }: SustainabilitySectionProps) {
  return (
    <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Sustainable Fashion, Powered by AI
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Sustainable Fashion"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 md:pl-12"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Eco-Friendly Innovation</h3>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our AI algorithms optimize production processes, reducing waste and energy consumption. 
              We use recycled and sustainable materials, carefully selected by our AI to minimize environmental impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-teal-600 transition duration-300"
            >
              Learn About Our Impact
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}