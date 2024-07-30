import styles from './style';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testingmonils from './components/Testingmonils';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer'; 

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.felxCenter }`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styels.boxwidth}`}>
        Hero
      </div>
    </div>
 
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styels.boxwidth}`}>
        Stats
        Business 
        Billing 
        CardDeal 
        Testingmonials 
        Clients 
        CTA
        Footer
      </div>
    </div>

  </div>
  );

export default App
