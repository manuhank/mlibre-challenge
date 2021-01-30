import NavBar from '../components/NavBar'
import '../styles/globals.scss'

function MLibre({ Component, pageProps }) {
  return <>
    <NavBar></NavBar>
    <Component {...pageProps} />
  </>
}

export default MLibre
