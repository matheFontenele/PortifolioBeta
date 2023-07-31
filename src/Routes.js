import Projetos from './components/Projects';
import Banner from './components/Banner';
import Header from './components/Header'
import Contato from './components/Contato';
import Footer from './components/Footer';


function Home() {
  return (
    <div className="Home">
      <Header/>
      <Banner/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default Home;
