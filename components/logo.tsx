import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Stylized figures holding hands */}
            <path d="M12 24C14 18 10 16 8 20C6 24 10 28 14 24" fill="#E63946" />
            <path d="M24 24C26 18 22 16 20 20C18 24 22 28 26 24" fill="#F39200" />
            <path d="M36 24C38 18 34 16 32 20C30 24 34 28 38 24" fill="#B3C800" />
            {/* Connecting arms */}
            <path d="M14 24L20 24" stroke="#E63946" strokeWidth="2" />
            <path d="M26 24L32 24" stroke="#F39200" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <div>
        <div className="font-bold text-gray-800 text-xl">DON BOSCO MIMBOMAN</div>
        <div className="text-xs text-gray-600">JUGEND • HILFE • WELTWEIT</div>
      </div>
    </Link>
  )
}

