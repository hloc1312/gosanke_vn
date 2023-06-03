
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routers from './routes/Routers';
import 'lightbox2/dist/css/lightbox.css';
import 'lightbox2/dist/js/lightbox-plus-jquery';
function App() {
  
  return (
    <BrowserRouter>
      <Routers></Routers>
    </BrowserRouter>
  );
}

export default App;
