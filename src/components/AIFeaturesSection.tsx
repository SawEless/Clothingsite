import { motion } from 'framer-motion'
import { Camera, Ruler, TrendingUp, Users, Zap, Globe } from 'lucide-react'

const aiFeatures = [
  { icon: <Camera className="w-8 h-8" />, title: 'Virtual Try-On', description: 'See clothes on your body in real-time' },
  { icon: <Ruler className="w-8 h-8" />, title: 'Perfect Fit AI', description: 'Get size recommendations based on your body scan' },
  { icon: <TrendingUp className="w-8 h-8" />, title: 'Trend Predictor', description: 'Stay ahead with AI-forecasted fashion trends' },
  { icon: <Users className="w-8 h-8" />, title: 'Style Community', description: 'Share and get inspired by AI-curated looks' },
  { icon: <Zap className="w-8 h-8" />, title: 'Instant Stylist', description: 'Get personalized outfit recommendations' },
  { icon: <Globe className="w-8 h-8" />, title: 'Sustainable Choices', description: 'Discover eco-friendly options with our AI' },
]

interface AIFeaturesSectionProps {
  isDarkMode: boolean
  setActiveAIFeature: (feature: string) => void
}

export default function AIFeaturesSection({ isDarkMode, setActiveAIFeature }: AIFeaturesSectionProps) {
  return (
    <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Revolutionizing Fashion with AI
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-xl shadow-lg cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveAIFeature(feature.title)}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-purple-600 mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}