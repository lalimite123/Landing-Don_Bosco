"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatBot() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])
  
  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!inputValue.trim()) return
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }
  
  // Simple bot response logic - in a real app, you'd connect to a backend API
  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes("inscription") || lowerMessage.includes("inscrire")) {
      return "Les inscriptions pour la nouvelle année scolaire sont ouvertes du 15 juin au 30 août. Vous pouvez venir à notre bureau administratif avec les documents suivants : certificat de naissance, bulletins scolaires précédents, et 2 photos d'identité."
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("adresse") || lowerMessage.includes("téléphone")) {
      return "Vous pouvez nous contacter au +237 222 222 222 ou par email à contact@donboscomimboman.org. Notre adresse est : Don Bosco Mimboman, Yaoundé, Cameroun."
    } else if (lowerMessage.includes("cours") || lowerMessage.includes("formation") || lowerMessage.includes("programme")) {
      return "Nous proposons des cours de niveau secondaire de la 6ème à la Terminale, ainsi que des formations professionnelles dans divers domaines techniques. Consultez notre page 'Nos Projets' pour plus d'informations."
    } else if (lowerMessage.includes("frais") || lowerMessage.includes("coût") || lowerMessage.includes("tarif")) {
      return "Les frais de scolarité varient selon le niveau et le programme. Veuillez nous contacter directement pour obtenir les informations tarifaires précises pour le programme qui vous intéresse."
    } else if (lowerMessage.includes("merci") || lowerMessage.includes("thank")) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions."
    } else if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut") || lowerMessage.includes("hello")) {
      return "Bonjour ! Comment puis-je vous aider aujourd'hui ?"
    } else {
      return "Je n'ai pas toutes les informations sur ce sujet. Voulez-vous être mis en contact avec un administrateur ? Vous pouvez aussi nous appeler au +237 222 222 222 ou nous envoyer un email à contact@donboscomimboman.org."
    }
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white rounded-lg shadow-2xl mb-4 w-80 sm:w-96 overflow-hidden"
          >
            <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3 border-2 border-white">
                  <Image 
                    src="/logo.png" 
                    alt="Don Bosco Logo" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold">{t("chat.title") || "Don Bosco Assistance"}</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Fermer le chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              <div className="flex flex-col space-y-3">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex items-end ${message.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    <div 
                      className={`rounded-lg p-3 max-w-xs ${
                        message.sender === 'user' 
                          ? 'bg-blue-500 text-white rounded-br-none' 
                          : 'bg-orange-100 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <div className="p-3 border-t">
              <form className="flex items-center" onSubmit={handleSendMessage}>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t("chat.placeholder") || "Écrivez votre message..."}
                  className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 text-white rounded-r-lg px-4 py-2 hover:bg-orange-600 transition-colors"
                  aria-label="Envoyer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label={t("chat.buttonLabel") || "Discuter avec nous"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        )}
      </button>
    </div>
  )
}