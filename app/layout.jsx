import Header from './components/Header'
import './globals.css'
// import google font directly
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'], 
  subsets: ['latin',]
  })

export const metadata = {
  title: 'Next Project App',
  description: 'Crash course from Traversy Media',
  keywords: 'nextjs, reactjs, typescript, crash course',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
          </main>
      </body>
    </html>
  )
}
