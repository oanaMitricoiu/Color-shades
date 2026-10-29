import Palette from './Palette';
import {Route,Routes, useParams} from 'react-router-dom';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';

function App() {
  function findPalette(id){
    return seedColors.find((palette) => palette.id === id)
  }

  function PaletteWrapper(){
    const {id} = useParams();
    return <Palette palette={generatePalette(findPalette(id))}/>
  }

  return (
    <Routes>
      <Route path='/' element={<h1>PALLETE LIST GOES HERE</h1>}/>
      <Route path='/palette/:id' element={<PaletteWrapper/>}/>
    </Routes>
    // <div>
    //   <Palette palette={generatePalette(seedColors[3])}/>
    // </div>
  );
}

export default App;
