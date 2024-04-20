import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './Components/AppHeader';

import AppHero from './Components/AppHero';
import AppAbout from './Components/AppAbout';
import AppServices from './Components/AppServices';
import AppWorks from './Components/AppWorks';
function App() {
  return (
   <>
    <div className='app'>
      <header id='header'>
        <AppHeader/>
      </header>
      <main>
          <AppHero/>
          <AppAbout/>
          <AppServices/>
          <AppWorks/>
      </main>
    </div>
   </>
  );
}

export default App;
