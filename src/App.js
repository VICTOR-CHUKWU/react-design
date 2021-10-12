import { useState } from 'react';
import Nav from './components/Nav';
import NewBooking from './components/NewBooking';
import SelectService from './components/SelectService';
import FirstForm from './components/FirstForm';
import  CargoDetail  from './components/CargoDetail';
import AdditionalService from './components/AdditionalService'

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const onToggle = (e) => {
    console.log(isToggle);
    setIsToggle(!isToggle)
  }
  return (
    <>
      <Nav/>
      <NewBooking/>
      <SelectService/>
      <FirstForm/>
      <CargoDetail isToggle={isToggle} onToggle={onToggle}/>
      <AdditionalService isToggle={isToggle} onToggle={onToggle}/>
    </>
  );
}

export default App;
