const m=document.getElementById('music'),b=document.getElementById('play'),v=document.getElementById('vol');m.volume=.45;v.oninput=e=>m.volume=e.target.value;
async function start(){try{await m.play();b.textContent='⏸'}catch(e){b.textContent='▶'}}start();
document.addEventListener('click',()=>{if(m.paused)start()},{once:true});
b.onclick=()=>{if(m.paused){m.play();b.textContent='⏸'}else{m.pause();b.textContent='▶'}};