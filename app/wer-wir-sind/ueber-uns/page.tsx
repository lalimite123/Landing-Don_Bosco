"use client"

import { Navbar } from "@/components/navbar"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Histoire() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/back.png')" }}>
      {/* Language Switcher - positioned in the top right corner */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <Navbar />
      
      {/* Hero section with Don Bosco image */}
      <section className="pt-40 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Notre Histoire</h1>
            <p className="text-xl md:text-2xl opacity-90">L'héritage de Don Bosco et notre mission auprès des jeunes</p>
          </motion.div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Les origines</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  En 1859, Saint Jean Bosco, un prêtre visionnaire, fonda la Congrégation salésienne avec une mission claire : 
                  offrir une chance aux jeunes les plus défavorisés de se former et de s'intégrer dans la société. 
                  Depuis, les Salésiens de Don Bosco ont poursuivi cet héritage avec passion et dévouement.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(249,115,22,0.4)] transition-shadow duration-300"
            >
              <Image 
                src="/histoire.png" 
                alt="Saint Jean Bosco" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="h-1 w-32 bg-orange-400 mb-12 mx-auto"></div>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Notre mission</h2>
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                Convaincus que la jeunesse est la clé du développement des sociétés, nous sommes déterminés à faire tout ce qui est en notre pouvoir 
                pour promouvoir leur épanouissement et leur éducation. Nous partageons les souffrances des jeunes et proposons des projets sociaux 
                et éducatifs innovants pour les aider à surmonter les défis de leur vie quotidienne.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                Nous croyons fermement que chaque jeune a le droit à une éducation de qualité, qui lui permettra de réaliser son plein potentiel 
                et de devenir un acteur positif de la société. C'est pourquoi nous nous engageons à offrir des programmes éducatifs complets et 
                adaptés aux besoins des jeunes, pour les aider à acquérir les compétences et les connaissances nécessaires pour réussir dans la vie.
              </motion.p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-orange-400/10 p-6 rounded-lg border-l-4 border-orange-400 shadow-lg hover:shadow-xl hover:bg-orange-400/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4">Éducation</h3>
              <p className="mb-4">
                Nous offrons des programmes éducatifs complets qui développent les compétences académiques, professionnelles et sociales.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-lime-500/10 p-6 rounded-lg border-l-4 border-lime-500 shadow-lg hover:shadow-xl hover:bg-lime-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4">Formation</h3>
              <p className="mb-4">
                Nos centres de formation professionnelle préparent les jeunes à des métiers d'avenir avec des compétences pratiques.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-teal-400/10 p-6 rounded-lg border-l-4 border-teal-400 shadow-lg hover:shadow-xl hover:bg-teal-400/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4">Accompagnement</h3>
              <p className="mb-4">
                Nous accompagnons chaque jeune dans son développement personnel, spirituel et social pour une croissance intégrale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-gray-800"
          >
            Notre parcours
          </motion.h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-400"></div>
            
            {/* Timeline items */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-orange-400 border-4 border-white z-10 shadow-md"></div>
              <div className="relative pl-8 md:w-1/2 md:ml-0 md:mr-auto md:pr-8 md:pl-0 text-right">
                <h3 className="text-xl font-bold mb-2">1859</h3>
                <p className="shadow-md p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">Fondation de la Congrégation salésienne par Saint Jean Bosco à Turin, Italie.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16 relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-orange-400 border-4 border-white z-10 shadow-md"></div>
              <div className="relative pl-8 md:w-1/2 md:ml-auto md:mr-0 md:pl-8 md:pr-0">
                <h3 className="text-xl font-bold mb-2">1972</h3>
                <p className="shadow-md p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">Arrivée des premiers Salésiens au Cameroun et début des activités éducatives.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-16 relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-orange-400 border-4 border-white z-10 shadow-md"></div>
              <div className="relative pl-8 md:w-1/2 md:ml-0 md:mr-auto md:pr-8 md:pl-0 text-right">
                <h3 className="text-xl font-bold mb-2">1991</h3>
                <p className="shadow-md p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">Ouverture du centre Don Bosco Mimboman pour répondre aux besoins des jeunes défavorisés.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-orange-400 border-4 border-white z-10 shadow-md"></div>
              <div className="relative pl-8 md:w-1/2 md:ml-auto md:mr-0 md:pl-8 md:pr-0">
                <h3 className="text-xl font-bold mb-2">Aujourd'hui</h3>
                <p className="shadow-md p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">Nous continuons à développer nos programmes éducatifs et à étendre notre impact auprès des jeunes.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-orange-400 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre mission</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Ensemble, nous pouvons faire une différence dans la vie des jeunes et construire un avenir meilleur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href= "#" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Faire un don
            </a>
           
            <a href= "#" className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Devenir bénévole
            </a>
            
          </div>
        </div>
      </motion.section>
    </main>
  )
}

 // "/hilf-mit/spenden"
// "/hilf-mit/freiwilligenarbeit"