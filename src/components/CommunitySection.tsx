import { motion } from 'framer-motion'
import { Users, TrendingUp, MessageCircle } from 'lucide-react'

interface CommunitySectionProps {
  isDarkMode: boolean
}

export default function CommunitySection({ isDarkMode }: CommunitySectionProps) {
  const features = [
    { icon: <Users className="w-12 h-12 text-purple-600 mb-4" />, title: 'Share Your Style', description: 'Upload your outfits and get feedback from our AI and community members.' },
    { icon: <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />, title: 'Discover Trends', description: 'Stay updated with the latest AI-predicted fashion trends and style inspirations.' },
    { icon: <MessageCircle className="w-12 h-12 text-purple-600 mb-4" />, title: 'Engage & Learn', description: 'Participate in discussions, workshops, and challenges to enhance your style.' },
  ]

  return (
    <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Join Our AI Fashion Community
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-xl shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {feature.icon}
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}