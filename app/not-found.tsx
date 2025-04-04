import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/back.png')" }}>
      <Navbar />
      
      <div className="container mx-auto px-4 pt-40 pb-20 flex flex-col items-center justify-center text-center">
        <div className="bg-white/90 p-12 rounded-lg shadow-xl max-w-2xl">
          <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">page non trouvé</h2>
          <p className="text-lg text-gray-600 mb-8">
            la page que vous recherchez n'existe pas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-lime-500 hover:bg-lime-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Retour a la page d'acceuil
            </Link>
            <Link 
              href="/wer-wir-sind" 
              className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              A propos de Nous
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}