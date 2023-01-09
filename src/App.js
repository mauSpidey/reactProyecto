import rey1 from './assets/rey_sisebuto.png';
import rey2 from './assets/rey_leogivildo.png';
import rey3 from './assets/rey_atanagildo.png';
import './App.css';

function App() {
  function cambiar(e){
    console.log(e.target.id);
    if(e.target.id=="rey1"){
      e.target.src=rey2;
      e.target.id="rey2";
    }else{
      e.target.src=rey1;
      e.target.id="rey1";
    }
    
  }
  function aumentar(e){
    //e.target.style.background=red;
    console.log(e.target.style.backgroundColor);
    //e.target.style.backgroundColor=red;
    if(Number(e.target.innerHTML)<7){
      e.target.innerHTML=Number(e.target.innerHTML)+1;
    }else if(Number(e.target.innerHTML)<9){
      e.target.innerHTML=Number(e.target.innerHTML)+1;
      e.target.style.backgroundColor="red";
    }else{
      e.target.innerHTML=1;
      e.target.style.backgroundColor="none";
    }
    
  }
  return (
    
    <>
    <div class="numero" onClick={aumentar}>1</div>
    <button class="boton">Aceptar</button>
    <div><img src={rey1} onClick={cambiar}></img></div>
    <input></input>
    
    </>

  );
  /*
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
  */
}

export default App;
