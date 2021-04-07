import Nav from '../components/Nav/Nav'
import Footer from "../components/Footer/Footer";


export default function App({ children }) {
  return (
    <>
    <Nav />    
    {children}
    <Footer />
    </>
  )
}
