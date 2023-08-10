import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Start from './components/Start';
import Loading from './components/Loading';
import Result from './components/Result';

function App() {
  const [showCard, setShowCard] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  const handleLoaded = () => {
    setLoading(false);
    setShowCard(true); 
  };

  const handleFinished = () => {
    setShowCard(false);
    setFinish(true);
  }

  return (
    <>
      {loading ? (
        <Loading onLoaded={handleLoaded} />
      ) : showCard ? (
        <Card onFinish={handleFinished}/>
      ) : finish ? (
        <Result/>
      ) : (
        <Start onButtonClick={handleClick} />
      )} 
    </>
  );
}

export default App;
