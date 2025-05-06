import './globals.css';

export const metadata = {
  title: 'AI Proposal Generator',
  description: 'Generate professional proposals using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full font-sans antialiased">
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
