import './globals.css'

export const metadata = {
  title: 'KARMUN',
  description: 'Kartal Anadolu Lisesi Model United Nations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-[calc(100dvh)] bg-[url('/home-bg.jpeg')] bg-center bg-cover relative w-full overflow-x-hidden">{children}</body>
    </html>
  )
}
