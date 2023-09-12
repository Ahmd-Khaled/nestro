import { Providers } from '@/redux/Providers'
import './globals.scss'
import { Cairo, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo'
})

export const metadata = {
  title: 'Nestro Coffee',
  description: 'Nestro Coffee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <Providers>
        <body className={cairo.className}>
          {children}
        </body>
      </Providers>
    </html>
  )
}
