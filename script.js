var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = "Turn the light on";
document.body.appendChild(btn);

// schijf hier tussen je code

toggle = false;
    
btn.addEventListener('click', function(){
  toggle = !toggle;                                     
  document.body.style.backgroundColor = toggle? "yellow": "black";
}

    ,document.body.style.backgroundColor = "black");
    btn.addEventListener('click', function change(){
        if (btn.innerHTML=="Turn the light on") {btn.innerHTML = "Turn the light off"; 
        console.log('The light is on')}
        
        else {btn.innerHTML = "Turn the light on"; 
        console.log('The light is off')}
    })
// schijf hier tussen je codeñ