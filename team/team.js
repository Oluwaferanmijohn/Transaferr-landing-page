let aside = document.getElementById('asidebar')
 let getStarted = document.getElementById('getStarted');
 let getStarted2 = document.getElementById('getStarted2');

 getStarted.addEventListener("click", () =>{
     aside.style.display = 'grid';
     getStarted.style.display = 'none';
     getStarted2.style.display = 'flex';


 })
 getStarted2.addEventListener("click", () =>{
     aside.style.display = 'none';
     getStarted.style.display = 'flex';
     getStarted2.style.display = 'none';
 })
// alert('working')