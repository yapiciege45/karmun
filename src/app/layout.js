import './globals.css'

export const metadata = {
  title: 'KARMUN',
  description: 'Kartal Anadolu Lisesi Model United Nations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-no-repeat bg-[url('/home-bg.jpeg')] bg-center bg-cover relative w-full overflow-x-hidden">
        <div className='h-[calc(100dvh)] overflow-y-scroll'>
          {children}
        </div>
      </body>
    </html>
  )
}
