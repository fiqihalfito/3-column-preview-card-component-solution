import '../styles/globals.css'
import { Lexend_Deca } from '@next/font/google'
import { Big_Shoulders_Display } from '@next/font/google'

// init font
const lexendDeca = Lexend_Deca({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-lexend-deca'
})

const bigShoulderDisplay = Big_Shoulders_Display({
  weight: "700",
  subsets: ["latin"],
  variable: '--font-bigShoulderDisplay'
})

export default function RootLayout({ children }) {
  return (
    // put font variable into html tag (tailwind rule)
    <html lang="en" className={`${lexendDeca.variable} ${bigShoulderDisplay.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
