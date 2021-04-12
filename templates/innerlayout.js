import Nav from '../components/Nav/Nav'
import Footer from "../components/Footer/Footer";
import Aside from './aside';

export default function App({ children }) {
  return (
    <div className={'main-theme'}>
    <Nav />
    <div className={'main'}>
      <div className={'screen'}>
        <Aside />
        {children}
      </div>


    </div>
    <Footer />
    </div>
  )
}
