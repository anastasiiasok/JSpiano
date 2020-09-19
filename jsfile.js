let result = document.getElementById('result');
let global = document.getElementById('global');
let wkey = document.getElementsByClassName('wkey');

let doS = new Audio('sounds/01-C4.ogg');
let reS = new Audio('sounds/03-D4.ogg');
let miS = new Audio('sounds/05-E4.ogg');
let faS = new Audio('sounds/06-F4.ogg');
let solS = new Audio('sounds/08-G4.ogg');
let laS = new Audio('sounds/10-A4.ogg');
let siS = new Audio('sounds/12-B4.ogg');


for(let k = 0; k < wkey.length; k++){
  wkey[k].addEventListener('click', (e)=> {
      
      result.innerText = event.target.innerText;
      colorChange(result.innerText);
  })
}

function colorChange(note) {
  if(note === 'do') {
    
    doS.play();
  } else if(note === 're') {
    
    reS.play();
  } else if(note === 'mi') {
    
    miS.play();
  } else if(note === 'fa') {
    
    faS.play();
  } else if(note === 'sol') {
    
    solS.play();
  } else if(note === 'la') {
    
    laS.play();
  } else if(note === 'si') {
    
    siS.play();
  }
}

document.querySelector('body').addEventListener('keydown', function(event) {
  keyworks(event.code)
});

function keyworks (key){
  if (key === 'KeyQ') { 
    result.innerText = 'do';
    colorChange(result.innerText);
  } else if (key === 'KeyW') { 
    result.innerText = 're';
    colorChange(result.innerText);
  } else if (key === 'KeyE') { 
    result.innerText = 'mi';
    colorChange(result.innerText);
  } else if (key === 'KeyR') { 
    result.innerText = 'fa';
    colorChange(result.innerText);
  } else if (key === 'KeyT') { 
    result.innerText = 'sol';
    colorChange(result.innerText);
  } else if (key === 'KeyY') { 
    result.innerText = 'la';
    colorChange(result.innerText);
  } else if (key === 'KeyU') { 
    result.innerText = 'si';
    colorChange(result.innerText);
  }
}
