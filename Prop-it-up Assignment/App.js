//import logo from './logo.svg';
import './App.css';
import Counter from './components/PersonCard';

function App() {
  return (
    <div className="App">
      
      <Counter  
        firstName="Jane"
        lastName="Doe"
        age={45}
        hairColor="Black"/>

      <Counter  
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown"/>


      <Counter  
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown"/>


      <Counter  
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"/>
    </div>
  );
}

export default App;
