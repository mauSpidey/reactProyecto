import rey1 from './assets/rey_sisebuto.png';
import rey2 from './assets/rey_leogivildo.png';
import rey3 from './assets/rey_atanagildo.png';
import './App.css';

function App() {
  let nombres=["Sisebuto","Leogivildo","Atanagildo"];
  return (
    <div class="contenedor">
      <div class="carta">
        <div class="imagen">
          <img src={rey1}/>
        </div>
        <div class="nombre">{nombres[0]}</div>
        </div>
      <div class="carta"><div class="imagen">
          <img src={rey2}/>
        </div>
        <div class="nombre">{nombres[1]}</div></div>
      <div class="carta"><div class="imagen">
          <img src={rey3}/>
        </div>
        <div class="nombre">{nombres[2]}</div></div>
    </div>
  );
}

export default App;
