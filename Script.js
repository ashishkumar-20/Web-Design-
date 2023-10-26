let slideBtnLeft=document.getElementById('slide-btn-left');
let slideBtnRight=document.getElementById('slide-btn-right');
let imageItem=document.querySelectorAll('.image-item');


let startSlider=0;
let endSlider=(imageItem.length-1)*100;
slideBtnLeft.addEventListener('click',()=>{
   if(startSlider<0)
   {
    startSlider=startSlider+100;
   }
    else if (startSlider==0)
    {
        startSlider=-endSlider;
        console.log(startSlider)
    }
   imageItem.forEach(element=>{
    element.style.transform=`translateX(${startSlider}%)`
   })
})
slideBtnRight.addEventListener('click',()=>{
    if(startSlider==-endSlider)
    {
        startSlider=0;
    }
    else if(startSlider<=endSlider)
    {
        startSlider=startSlider -100;
    }
    imageItem.forEach(element=>{
        element.style.transform=`translateX(${startSlider}%)`
    })
    
})

// Side Bar Navigation
let sideBarNavigation=document.getElementById("sidebar-menu");
let sideBarNav=document.getElementById("sidebar-nav");
sideBarNavigation.addEventListener("click",()=>{
   sideBarNav.classList.toggle("sidebar-show");
})

let sideBarClose=document.getElementById('sidebar-close');
sideBarClose.addEventListener("click",()=>{
    sideBarNav.classList.toggle("sidebar-show");
})