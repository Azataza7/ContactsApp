import './App.css'
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Containers/Main/Main';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={(
          <Main/>
        )}/>
        <Route path="*" element={(
          <h1>Not found</h1>
        )}/>
      </Routes>
    </>
  )
}

export default App
