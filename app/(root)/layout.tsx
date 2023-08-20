import type { Metadata } from 'next'
import { dark } from '@clerk/themes'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import '../globals.css'

import Topbar from '@/components/shared/topbar'
import LeftSidebar from '@/components/shared/left-sidebar'
import RightSidebar from '@/components/shared/right-sidebar'
import Bottombar from '@/components/shared/bottombar'

import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/providers/theme-provider'
import ToasterProvider from '@/providers/toaster-provider'
import ModalProvider from '@/providers/modal-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next.js Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>

            <ToasterProvider />
            <ModalProvider />
            <TooltipProvider>
              <Topbar />

              <main className='flex flex-row'>
                <LeftSidebar />
                <section className="main-container">
                  <div className="w-full max-w-4xl">
                    {children}
                  </div>
                </section>
                <RightSidebar />
              </main>
              <Bottombar />
            </TooltipProvider>
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  )
}
