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
        if (btn.value=="Turn the light on") btn.value = "Turn the light off";
        else btn.value = "Turn the light on";
    })
// schijf hier tussen je code