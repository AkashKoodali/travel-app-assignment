import Footer from './Footer';
import NavBar from './NavBar'

export default function Layout({ children }) {
    return <div className='relative bg-gradient-to-b from-[#c4ebf7] h-[100vh] to-[#FFFF]/10'> 
        <NavBar />
        {children}
        <Footer />
    </div>;
  }