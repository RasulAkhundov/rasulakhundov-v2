import '../styles/reset.css';
import '../styles/public.css';

export const metadata = {
  title: 'Rasul Akhundov Portfolio',
  description: 'Code by Rasul',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
