import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface HeroProps {
  backgroundImage: string
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function Hero({ 
  backgroundImage, 
  title, 
  subtitle, 
  description,
  ctaText = "En savoir plus",
  ctaLink = "/wer-wir-sind/ueber-uns",
  secondaryCtaText,
  secondaryCtaLink
}: HeroProps) {
  return (
    <section className="relative h-[650px] overflow-hidden pt-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl sm:text-2xl mb-8 leading-tight">{subtitle}</p>
          <p className="text-lg opacity-90 mb-8">{description}</p>
          
          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href={ctaLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 shadow-lg"
              >
                {ctaText}
              </motion.button>
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
                >
                  {secondaryCtaText}
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>
      </div>
    </section>
  )
}

