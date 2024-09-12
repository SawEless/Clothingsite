import { motion } from 'framer-motion'

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Join the AI Fashion Revolution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-8"
        >
          Subscribe for personalized style updates, exclusive AI-curated offers, and early access to new features
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto flex"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-r-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}