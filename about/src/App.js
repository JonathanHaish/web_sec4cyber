import './App.css';
import NavBar from './Components/navbar';
import AboutCamp from './Components/ aboutCompany_new';
import Quick from './Components/quickLinkCon';


function App() {
  return(
      <div>
        <NavBar name="Sec4Cyber" email="secforcyber@gmail.com" />
        <AboutCamp />
        <Quick/>
      </div>
  );  
  
}

export default App;
