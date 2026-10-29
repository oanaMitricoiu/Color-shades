import Palette from './Palette';
import {Route,Routes} from 'react-router-dom';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<h1>PALLETE LIST GOES HERE</h1>}/>
      <Route exact path='/palette/:id' element={<h1>INDIVIDUAL PALETTE</h1>}/>
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedColors[3])}/>
    // </div>
  );
}

export default App;
