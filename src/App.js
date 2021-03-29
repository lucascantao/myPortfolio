
import { useContext } from 'react';
import Nav from './components/Nav';
import Sessions from './components/Sessions';
import { SessionContext } from './context/SessionContext';

import styles from './styles/App.module.css';
import './styles/Essentials.css';

function App() {


  const { setSelectedSession } = useContext(SessionContext);

  return (

    <div className={styles.appContainer}>

      <Nav select={setSelectedSession} />

      <Sessions />

    </div>
  );
}

export default App;
