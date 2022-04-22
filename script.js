var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Turn the light on';
document.body.appendChild(btn);

// schijf hier tussen je code
let colors = ['yellow', 'black']

btn.addEventListener('click', function(){
    var colors1 = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = colors1;
})
// schijf hier tussen je code