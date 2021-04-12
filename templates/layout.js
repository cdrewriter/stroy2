import Nav from '../components/Nav/Nav'
import react, {useState} from "react";
import Footer from "../components/Footer/Footer";
import { useRouter } from 'next/router'
import Aside from './aside';
import Box from "../components/Box/Box";

function objToString(object) {
  var str = '';
  for (var k in object) {
    if (object.valueOf(k)) {
      str += object[k];
    }
  }
 // console.log(str);
  return str;
}

export default function App({ children, clsme, asideOn }) {
  const router = useRouter()

  const [aside, setAside] = useState(asideOn | false);
  {aside == true ? clsme = 'onescreen' : null};
 // console.log(router.pathname)
  const cls = objToString(clsme);
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }


  return (
    <div className={'main-theme'}>
      <Nav />

      <div className={'main ' + `${cls}`}>

        {aside == true ? <Aside /> :  null}
        {children}
        <Box>

          <a onClick={() => setAside(aside == true ? false : true)} >{aside == true ? 'Вкл' : 'ВЫкл'}</a>
        </Box>
      </div>
    <Footer />
    </div>
  )
}
