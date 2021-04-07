import Nav from '../components/Nav/Nav'
import Footer from "../components/Footer/Footer";


export default function App({ children }) {
  return (
    <div className={'main-theme'}>
    <Nav />
    <div className={'main'}>
    {children}
    </div>
    <Footer />
    </div>
  )
}
