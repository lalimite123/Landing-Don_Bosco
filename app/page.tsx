"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChatBot } from "@/components/chat-bot"

export default function Home() {
  const { t } = useLanguage()
  
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('/back.png')" }}
    >
      {/* Language Switcher - positioned in the top right corner */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <Navbar />

      {/* Chat bot component */}
      <ChatBot />

      <Hero
        backgroundImage="/back.png"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
      />

      {/* Main features section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("Comment nous aidons") || "Comment nous aidons"}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("Découvrez nos programmes et initiatives pour soutenir les jeunes dans leur développement") || "Découvrez nos programmes et initiatives pour soutenir les jeunes dans leur développement"}
            </p>
            <div className="h-1 w-32 bg-orange-400 mt-6 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-lime-500/10 p-6 rounded-lg border-l-4 border-lime-500 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold mb-4">{t("Nos Projets") || "Nos Projets"}</h2>
              <p className="mb-4">
                {t("projects.description") || "Découvrez les différentes activités et programmes que nous proposons pour aider les jeunes à développer leurs compétences."}
              </p>
              <a href="#" className="text-lime-700 font-medium hover:underline">
                {t("En savoir plus →") || "En savoir plus → /wie-wir-helfen/projekte"}
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-orange-400/10 p-6 rounded-lg border-l-4 border-orange-400 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold mb-4">{t("Qui Sommes-Nous") || "Qui Sommes-Nous"}</h2>
              <p className="mb-4">
                {t("about.description") || "Apprenez-en plus sur notre histoire, notre mission et notre vision pour l'avenir des jeunes."}
              </p>
              <a href="/wer-wir-sind/ueber-uns" className="text-orange-700 font-medium hover:underline">
                {t("Découvrir notre histoire →") || "Découvrir notre histoire →"}
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-teal-400/10 p-6 rounded-lg border-l-4 border-teal-400 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold mb-4">{t("Nos Partenaires") || "Nos Partenaires"}</h2>
              <p className="mb-4">
                {t("Découvrez les organisations et institutions avec lesquelles nous collaborons pour maximiser notre impact.") || ";;"}
              </p>
              <a href="#" className="text-teal-700 font-medium hover:underline">
                {t("Voir nos partenariats →") || "Voir nos partenariats → /wie-wir-helfen/partnerschaften"}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("impact.title") || "Notre Impact"}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("Quelques chiffres qui témoignent de notre engagement envers les jeunes") || "Quelques chiffres qui témoignent de notre engagement envers les jeunes"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
              <div className="text-gray-700">{t("Années d'expérience") || "Années d'expérience"}</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl font-bold text-lime-500 mb-2">500+</div>
              <div className="text-gray-700">{t("Jeunes formés chaque année") || "Jeunes formés chaque année"}</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl font-bold text-teal-500 mb-2">90%</div>
              <div className="text-gray-700">{t("Taux de réussite") || "Taux de réussite"}</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl font-bold text-purple-500 mb-2">15+</div>
              <div className="text-gray-700">{t("Programmes éducatifs") || "Programmes éducatifs"}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("Témoignages") || "Témoignages"}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("voici certains temoinages") || "Ce que disent nos élèves et leurs parents"}
            </p>
            <div className="h-1 w-32 bg-orange-400 mt-6 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Portrait" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Jean Mbarga</h3>
                  <p className="text-sm text-gray-600">Ancien élève, Promotion 2019</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Grâce à la formation que j'ai reçue à Don Bosco Mimboman, j'ai pu trouver un emploi stable et subvenir aux besoins de ma famille. 
                Les compétences techniques et les valeurs que j'ai acquises m'ont transformé."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/testimonial2.jpg" 
                    alt="Portrait" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Marie Atangana</h3>
                  <p className="text-sm text-gray-600">Élève actuelle, Classe de 1ère</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "L'environnement d'apprentissage à Don Bosco est exceptionnel. Les enseignants sont dévoués et nous encouragent à donner le meilleur 
                de nous-mêmes. Je me sens préparée pour réussir mon baccalauréat et poursuivre mes études."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/testimonial3.jpg" 
                    alt="Portrait" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Paul Essomba</h3>
                  <p className="text-sm text-gray-600">Parent d'élève</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "J'ai inscrit mes deux enfants à Don Bosco Mimboman et je suis impressionné par leur progression. L'éducation qu'ils reçoivent 
                va au-delà des connaissances académiques, elle forme des personnes responsables et engagées."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News and Blog section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("Actualités") || "Actualités & Blog"}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("nos actualités suivent") || "Restez informé des dernières nouvelles et événements de Don Bosco Mimboman"}
            </p>
            <div className="h-1 w-32 bg-orange-400 mt-6 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image 
                  src="/news1.jpg" 
                  alt="Actualité" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">15 Juin 2023</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Cérémonie de remise des diplômes 2023</h3>
                <p className="text-gray-600 mb-4">
                  Plus de 100 étudiants ont reçu leur diplôme lors d'une cérémonie émouvante en présence des autorités locales.
                </p>
                <a href="#" className="text-orange-600 font-medium hover:underline">Lire la suite →</a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image 
                  src="/news2.jpg" 
                  alt="Actualité" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">3 Mai 2023</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Nouveau partenariat avec une entreprise locale</h3>
                <p className="text-gray-600 mb-4">
                  Don Bosco Mimboman a signé un accord avec une entreprise locale pour faciliter l'insertion professionnelle des diplômés.
                </p>
                <a href="#" className="text-orange-600 font-medium hover:underline">Lire la suite →</a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image 
                  src="/news3.jpg" 
                  alt="Actualité" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">20 Avril 2023</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Tournoi sportif inter-écoles</h3>
                <p className="text-gray-600 mb-4">
                  Nos élèves ont brillé lors du tournoi sportif inter-écoles, remportant plusieurs médailles dans différentes disciplines.
                </p>
                <a href="#" className="text-orange-600 font-medium hover:underline">Lire la suite →</a>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
              Voir toutes les actualités
            </a>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-orange-500 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("Rejoignez notre mission") || "Rejoignez notre mission"}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {t("Ensemble, nous pouvons faire une différence dans la vie des jeunes et construire un avenir meilleur.") || "Ensemble, nous pouvons faire une différence dans la vie des jeunes et construire un avenir meilleur."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/hilf-mit/spenden" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              {t("Faire un don") || "Faire un don"}
            </a>
            <a href="/contact" className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              {t("Nous contacter") || "Nous contacter"}
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

