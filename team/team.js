let aside = document.getElementById('asidebar')
 let getStarted = document.getElementById('getStarted');
 let getStarted2 = document.getElementById('getStarted2');
 let getStarted3 = document.getElementById('getStarted3');
 let getStarted4 = document.getElementById('getStarted4');

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

 getStarted3.addEventListener("click", () =>{
     aside.style.display = 'grid';
    //  getStarted.style.display = 'none';
     getStarted3.style.display = 'none';
     getStarted4.style.display = 'flex';


 })
 getStarted4.addEventListener("click", () =>{
     aside.style.display = 'none';
    //  getStarted.style.display = 'flex';
     getStarted3.style.display = 'flex';
     getStarted4.style.display = 'none';
 })
// alert('working')