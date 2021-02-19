import Nav from '../components/Nav/Nav'

import Fullpage from "../components/Fullpage/Fullpage";
import Aside    from "../components/Aside/Asiden";
import Footer   from "../components/Footer/Footer";

export default function App({ children, catitems }) {
  return (
    <div className={'inner'}>
    <Nav />

     {children}
      <Footer />
    </div>

  )
}
