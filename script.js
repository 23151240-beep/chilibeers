document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.getElementById('menu'),nav=document.querySelector('nav');menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
function interest(f){document.getElementById('msg').value='Me interesa recibir información sobre el sabor '+f+'.';document.getElementById('mayoreo').scrollIntoView({behavior:'smooth'});}
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value,b=document.getElementById('business').value,c=document.getElementById('city').value,q=document.getElementById('qty').value,m=document.getElementById('msg').value;
const s=encodeURIComponent('Cotización ChiliBeers - '+n),body=encodeURIComponent(`Nombre: ${n}\nNegocio: ${b}\nCiudad: ${c}\nCantidad: ${q}\n\n${m}`);
window.location.href=`mailto:pedidos@chilibeers.example?subject=${s}&body=${body}`;});