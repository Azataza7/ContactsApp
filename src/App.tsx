import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import MainPage from './Containers/Main/MainPage';
import NewContactForm from './Containers/NewContactForm/NewContactForm';
import EditContactForm from './Containers/EditContactForm/EditContactForm';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={(
          <MainPage/>
        )}/>
        <Route path="/add-contact" element={(
          <NewContactForm/>
        )}/>
        <Route path="/edit/:id" element={(
          <EditContactForm/>
        )}/>
        <Route path="*" element={(
          <h1>Not found</h1>
        )}/>
      </Routes>
    </>
  );
};

export default App;
