const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here

  let i = 0;
  
  function konamiCode(e){
    const key = e.key;
    
    if (key === codes[i]){
      i++
      if(i === codes.length){
        alert('Congrats');
        i = 0;
      }
    }else{
      i = 0;
    }
  }
  
  document.body.addEventListener('keydown', konamiCode);
  
}
