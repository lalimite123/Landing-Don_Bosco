"use client"

import { Navbar } from "@/components/navbar"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Projects() {
  const { t } = useLanguage()
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <main className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/back.png')" }}>
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-40 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Projets</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Découvrez les activités que nous proposons pour aider les jeunes à se développer
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="h-1 w-32 bg-lime-500 mb-12 mx-auto"></div>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Nos Activités</h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="mb-6">
                Nous proposons une gamme d'activités pour les jeunes, conçues pour les aider à développer leurs compétences, 
                à s'épanouir et à construire un avenir meilleur.
              </p>
            </div>
          </motion.div>
          
          {/* Activities cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Formation Professionnelle */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500"
            >
              <div className="relative h-48">
                <Image 
                  src="/formation-pro.jpg" 
                  alt="Formation Professionnelle" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Cours de Formation Professionnelle</h3>
                <p className="text-gray-600">
                  Nous proposons des cours de formation professionnelle pour aider les jeunes à acquérir des compétences 
                  pratiques et à trouver un emploi dans divers secteurs.
                </p>
              </div>
            </motion.div>
            
            {/* Cours Secondaire */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500"
            >
              <div className="relative h-48">
                <Image 
                  src="/education.jpg" 
                  alt="Cours Secondaire" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Cours de Niveau Secondaire</h3>
                <p className="text-gray-600">
                  Nous offrons des cours de niveau secondaire de la 6ème à la Terminale pour aider les jeunes 
                  à réussir leurs études et à préparer leur avenir académique.
                </p>
              </div>
            </motion.div>
            
            {/* Sport et Loisirs */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500"
            >
              <div className="relative h-48">
                <Image 
                  src="/sports.jpg" 
                  alt="Sport et Loisirs" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Activités de Sport et de Loisirs</h3>
                <p className="text-gray-600">
                  Nous proposons des activités de sport, de musique, de théâtre et autres loisirs pour aider les jeunes 
                  à se développer physiquement, socialement et émotionnellement.
                </p>
              </div>
            </motion.div>
            
            {/* Séminaires et Ateliers */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500"
            >
              <div className="relative h-48">
                <Image 
                  src="/seminars.jpg" 
                  alt="Séminaires et Ateliers" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Séminaires et Ateliers</h3>
                <p className="text-gray-600">
                  Nous proposons des séminaires et des ateliers sur des thèmes tels que la santé, la nutrition, 
                  la citoyenneté et autres sujets importants pour le développement des jeunes.
                </p>
              </div>
            </motion.div>
            
            {/* Activités de Volontariat */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500"
            >
              <div className="relative h-48">
                <Image 
                  src="/volunteer.jpg" 
                  alt="Activités de Volontariat" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Activités de Volontariat</h3>
                <p className="text-gray-600">
                  Nous proposons des activités de volontariat pour les jeunes qui souhaitent aider les autres 
                  et acquérir des compétences en matière de travail d'équipe et de communication.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Impact section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Notre Impact</h2>
            <p className="text-lg text-gray-600 mb-12">
              Grâce à nos activités et programmes, nous avons pu aider des milliers de jeunes à développer leurs compétences, 
              à poursuivre leurs études et à trouver leur voie dans la vie.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl font-bold text-lime-500 mb-2">500+</div>
                <div className="text-gray-700">Jeunes formés chaque année</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl font-bold text-lime-500 mb-2">90%</div>
                <div className="text-gray-700">Taux de réussite aux examens</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl font-bold text-lime-500 mb-2">30+</div>
                <div className="text-gray-700">Années d'expérience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-lime-500 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez nos programmes</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Vous souhaitez participer à nos activités ou soutenir notre mission ? Contactez-nous dès aujourd'hui !
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/hilf-mit/spenden" className="bg-white text-lime-600 hover:bg-lime-50 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Faire un don
            </a>
            <a href="/contact" className="bg-lime-600 hover:bg-lime-700 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Nous contacter
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}