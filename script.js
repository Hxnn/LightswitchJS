var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = "Turn the light on";
document.body.appendChild(btn);

// schijf hier tussen je code

toggle = false;
    
btn.addEventListener('click', function(){
  toggle = !toggle;                                     
  document.body.style.backgroundColor = toggle? "yellow": "black";
  console.log();
}

    ,document.body.style.backgroundColor = "black");
    btn.addEventListener('click', function change(){
        if (btn.innerHTML=="Turn the light on") btn.innerHTML = "Turn the light off";
        else btn.innerHTML = "Turn the light on";
        console.log();
    })
// schijf hier tussen je codeñ