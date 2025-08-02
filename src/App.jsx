import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import ShowCart from './components/ShowCart';
import ShowCase from './components/ShowCase';
import Footer from   './components/Footer';
import { DataCollection } from './components/DataCollection';
import ItemCart from './components/ItemCart';



function App() {
  return (
    <>
      <Navbar />  
      <HeroPage />
      <ShowCase />
      <ShowCart/>
      <DataCollection />
       <ItemCart />
      <Footer/>
     
    </>
  );
}

export default App;