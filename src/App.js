
import './App.css';
import 'antd/dist/antd.css';
import eden from './assets/cutshort.ico';
import FirstForm from './components/Forms/FirstForm';
import ProgressSteps from './components/Steps/ProgressSteps';

function App() {
  return (
    <div className='main-conatiner'>
      <div className='centered-container'>
        <header className='logo-container'>
        <img src={eden} alt="logo"/>
          Eden
        </header>
       <ProgressSteps/>
      </div>
    
    </div>
  );
}

export default App;
