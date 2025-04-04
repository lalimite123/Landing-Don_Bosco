"use client"

import { Navbar } from "@/components/navbar"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Partnerships() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Partenariats</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Ensemble pour un avenir meilleur pour les jeunes
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <div className="h-1 w-32 bg-lime-500 mb-12 mx-auto"></div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Nos Collaborations</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Don Bosco Mimboman collabore avec diverses organisations et institutions pour maximiser son impact 
                et offrir les meilleures opportunités possibles aux jeunes. Ces partenariats nous permettent de 
                développer nos programmes, d'améliorer nos infrastructures et d'élargir notre portée.
              </p>
            </div>
          </motion.div>
          
          {/* Partners section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Government partnership */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/government.jpg" 
                  alt="Gouvernement du Cameroun" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Le Gouvernement du Cameroun</h3>
                <p className="text-gray-600 mb-4">
                  Notre partenariat avec le gouvernement camerounais nous permet de nous aligner sur les politiques 
                  nationales d'éducation et de formation professionnelle. Cette collaboration nous aide à obtenir 
                  les accréditations nécessaires et à garantir que nos programmes répondent aux normes nationales.
                </p>
                <p className="text-gray-600">
                  Grâce à ce partenariat, nous bénéficions également de certains soutiens institutionnels qui 
                  renforcent notre capacité à servir efficacement les jeunes de notre communauté.
                </p>
              </div>
            </motion.div>
            
            {/* Catholic Church partnership */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/church.jpg" 
                  alt="Église catholique du Cameroun" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">L'Église catholique du Cameroun</h3>
                <p className="text-gray-600 mb-4">
                  En tant qu'institution catholique, nous maintenons des liens étroits avec l'Église catholique du Cameroun. 
                  Ce partenariat nous permet d'intégrer les valeurs chrétiennes dans notre approche éducative et de 
                  bénéficier du soutien spirituel et matériel de la communauté catholique.
                </p>
                <p className="text-gray-600">
                  L'Église nous aide également à rester fidèles à la vision de Don Bosco, qui mettait l'accent sur 
                  l'éducation intégrale des jeunes, combinant développement intellectuel, professionnel, social et spirituel.
                </p>
              </div>
            </motion.div>
            
            {/* NGO partnerships */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/ngo.jpg" 
                  alt="Organisations non gouvernementales" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Organisations non gouvernementales (ONG)</h3>
                <p className="text-gray-600 mb-4">
                  Nous collaborons avec diverses ONG locales et internationales qui partagent notre engagement envers 
                  l'éducation et le développement des jeunes. Ces partenariats nous permettent d'accéder à des ressources 
                  supplémentaires, à des expertises spécialisées et à des opportunités de financement pour nos projets.
                </p>
                <p className="text-gray-600">
                  Grâce à ces collaborations, nous pouvons également participer à des initiatives plus larges visant 
                  à améliorer les conditions de vie des jeunes au Cameroun et à promouvoir leur inclusion sociale et économique.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Summary section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Notre Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                En résumé, Don Bosco Mimboman est une institution catholique qui offre une éducation et une formation 
                de qualité aux jeunes de Yaoundé et de ses environs. L'institution vise à aider les jeunes à développer 
                leurs compétences et leurs talents, et à devenir des citoyens responsables et actifs dans leur communauté.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nos partenariats sont essentiels pour réaliser cette mission. Ils nous permettent de combiner nos forces 
                avec celles d'autres acteurs engagés dans le développement des jeunes, créant ainsi un écosystème de 
                soutien plus robuste et plus efficace.
              </p>
              <p className="text-lg text-gray-700">
                Nous sommes toujours ouverts à de nouvelles collaborations qui peuvent nous aider à étendre notre impact 
                et à améliorer la qualité de nos services pour les jeunes que nous servons.
              </p>
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
          <h2 className="text-3xl font-bold mb-6">Devenez notre partenaire</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Vous représentez une organisation qui partage nos valeurs et notre engagement envers les jeunes ? 
            Explorons ensemble comment nous pouvons collaborer pour un impact plus grand !
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-lime-600 hover:bg-lime-50 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Nous contacter
            </a>
            <a href="#" className="bg-lime-600 hover:bg-lime-700 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            /*<a href="/hilf-mit/spenden" className="bg-lime-600 hover:bg-lime-700 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"></a>*/ 
              Soutenir notre mission
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}