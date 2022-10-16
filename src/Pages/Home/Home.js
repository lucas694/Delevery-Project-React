import "./Home.css";
import BoxMessage from '../../componentes/BoxMessage/BoxMessage'
import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'



const Home = () => {
  return (
    <div id="background">
        <Header/>
        <BoxMessage/>
        <Footer/>        
    </div>
  )
}

export default Home