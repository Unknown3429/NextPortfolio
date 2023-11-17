import { Sora } from '@next/font/google'

//font setting 
const sora = Sora({
  subsets: ['latin'],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'



const Layout = ({ children }) => {
  return <div className={`page bg-site bg-cover bg-no-repeat relative ${sora.variable} font-sora text-white`}>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>;
};

export default Layout;
