import { motion } from 'framer-motion'

interface AIFeatureModalProps {
  feature: string
  onClose: () => void
  isDarkMode: boolean
}

export default function AIFeatureModal({ feature, onClose, isDarkMode }: AIFeatureModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className={`p-8 rounded-lg max-w-md w-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
      >
        <h3 className="text-2xl font-bold mb-4">{feature}</h3>
        <p className="mb-4">This is where you would implement the specific AI feature functionality.</p>
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}