import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './redux/Providers'
import Providekro from './v1/1/helper/Provideapi'

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Woo Commerce',
  description: 'Discover unique handmade jewelry at Woo Commerce. Shop our collection of artisan-crafted necklaces, earrings, and bracelets',
  keywords: 'Handmade jewelry Trendy jewelry, Eco-friendly jewelry, woocommerce, Contemporary geometric earrings, meesho, amazon ',
  author: 'adult__admin'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providekro>
      <Providers>
      <body>{children}</body>
      </Providers>
      </Providekro>
    </html>
  )
}
