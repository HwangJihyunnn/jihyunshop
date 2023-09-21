import { Container } from 'react-bootstrap';
import './App.css';
import Gnb from './component/Gnb';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll';
import { useEffect, useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false)

  useEffect(()=> {
    console.log(authenticate);
  },[authenticate])
  return (
    <Container className='body'>
      <Gnb authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Routes>
            <Route path='/' element={<ProductAll />}/>
          </Routes>
    </Container>
  );
}

export default App;
