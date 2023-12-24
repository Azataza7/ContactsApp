import './App.css'
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="*" element={(
          <h1>Not found</h1>
        )}/>
      </Routes>
    </>
  )
}

export default App
