import type { Metadata } from 'next'
import './globals.css'
import QueryProvider from '@/providers/QueryProvider'

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Pagina de desafio de front-end da MKS sistemas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
