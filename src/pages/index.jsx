import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
  <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);


import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Menu from '../components/Menu/Menu';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';