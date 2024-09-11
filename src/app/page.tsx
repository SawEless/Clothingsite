'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Search, ShoppingCart, Menu, X, MessageCircle, Camera, Ruler, TrendingUp, ChevronDown, Star, Users, Zap, Globe, Moon, Sun } from 'lucide-react'

const products = [
  { id: 1, name: 'AI-Designed Blazer', price: 199.99, image: '/', rating: 4.8, reviews: 120 },
  { id: 2, name: 'Smart Fabric Shirt', price: 89.99, image: '/', rating: 4.6, reviews: 95 },
  { id: 3, name: 'Eco-Tech Jeans', price: 129.99, image: '/', rating: 4.9, reviews: 150 },
  { id: 4, name: 'Adaptive Sneakers', price: 159.99, image: '/', rating: 4.7, reviews: 110 },
]

const aiFeatures = [
  { icon: <Camera className="w-8 h-8" />, title: 'Virtual Try-On', description: 'See clothes on your body in real-time' },
  { icon: <Ruler className="w-8 h-8" />, title: 'Perfect Fit AI', description: 'Get size recommendations based on your body scan' },
  { icon: <TrendingUp className="w-8 h-8" />, title: 'Trend Predictor', description: 'Stay ahead with AI-forecasted fashion trends' },
  { icon: <Users className="w-8 h-8" />, title: 'Style Community', description: 'Share and get inspired by AI-curated looks' },
  { icon: <Zap className="w-8 h-8" />, title: 'Instant Stylist', description: 'Get personalized outfit recommendations' },
  { icon: <Globe className="w-8 h-8" />, title: 'Sustainable Choices', description: 'Discover eco-friendly options with our AI' },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<string[]>([])
  const [userInput, setUserInput] = useState('')
  const [activeAIFeature, setActiveAIFeature] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInput.trim()) {
      setChatMessages([...chatMessages, `You: ${userInput}`])
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setChatMessages(prev => [...prev, `AI: Based on your style preferences and current trends, I recommend pairing our AI-Designed Blazer with the Eco-Tech Jeans for a smart casual look. The Smart Fabric Shirt would also complement this outfit nicely for a more formal setting.`])
      }, 1000)
      setUserInput('')
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <motion.header 
        style={{ opacity: headerOpacity }}
        className={`fixed w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'} backdrop-filter backdrop-blur-lg shadow-md`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">NeoThread AI</Link>
          <nav className="hidden md:flex space-x-6">
            {['Discover', 'AI Collections', 'Sustainability', 'Community', 'About'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className={`hover:text-purple-600 transition duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`transition duration-300 ${isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
              <Search className="w-6 h-6" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`transition duration-300 ${isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
              <ShoppingCart className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`transition duration-300 ${isDarkMode ? 'text-yellow-300 hover:text-yellow-400' : 'text-gray-600 hover:text-purple-600'}`}
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden fixed w-full z-40 top-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
          >
            <nav className="flex flex-col space-y-4 p-4">
              {['Discover', 'AI Collections', 'Sustainability', 'Community', 'About'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className={`hover:text-purple-600 transition duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">The Future of Fashion <br />is Here</h1>
            <p className="text-xl md:text-2xl mb-8">Experience AI-driven style, personalized just for you</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg"
            >
              Explore AI Collections
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* AI Features Section */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Revolutionizing Fashion with AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
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

      {/* Featured Products */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AI-Curated Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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

      {/* AI Style Recommendation */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Your Personal AI Stylist</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Stylist"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Get Personalized Outfit Recommendations</h3>
              <p className="mb-6">
                Our AI analyzes your body type, skin tone, personal style, and the latest trends to create perfect outfit combinations just for you.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Try AI Stylist Now
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sustainable Fashion, Powered by AI</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable Fashion"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
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
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Join Our AI Fashion Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-xl shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Share Your Style</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Upload your outfits and get feedback from our AI and community members.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-xl shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Discover Trends</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Stay updated with the latest AI-predicted fashion trends and style inspirations.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-xl shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <MessageCircle className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Engage & Learn</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Participate in discussions, workshops, and challenges to enhance your style.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join the AI Fashion Revolution</h2>
          <p className="text-xl mb-8">Subscribe for personalized style updates, exclusive AI-curated offers, and early access to new features</p>
          <form className="max-w-md mx-auto flex">
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
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NeoThread AI</h3>
              <p className="text-gray-400">Redefining fashion with artificial intelligence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'AI Technology', 'Sustainability', 'Careers', 'Press'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition duration-300">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">1234 AI Fashion Street, Future City</p>
              <p className="text-gray-400">support@neothreadai.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NeoThread AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </motion.div>

      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-20 right-4 w-80 rounded-lg shadow-xl overflow-hidden z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
              <h3 className="font-semibold">AI Style Assistant</h3>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-2">
              {chatMessages.map((message, index) => (
                <div key={index} className={`p-2 rounded-lg ${message.startsWith('You:') ? (isDarkMode ? 'bg-gray-700 text-right' : 'bg-gray-100 text-right') : (isDarkMode ? 'bg-gray-600' : 'bg-purple-100')}`}>
                  {message}
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask for style advice..."
                  className={`flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
                >
                  Send
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Feature Modal */}
      <AnimatePresence>
        {activeAIFeature && (
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
              <h3 className="text-2xl font-bold mb-4">{activeAIFeature}</h3>
              <p className="mb-4">This is where you would implement the specific AI feature functionality.</p>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveAIFeature(null)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}