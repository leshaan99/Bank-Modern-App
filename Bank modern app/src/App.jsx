import styles from './style';

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
        ClickToAction 
        Footer
      </div>
    </div>

  </div>
  );

export default App
