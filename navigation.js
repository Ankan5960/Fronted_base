
const wellcome=document.getElementById('head')
function NAME(){
    
        var name1=window.prompt("Enter your name")
        wellcome.innerText='Wellcome_'+ name1 +'!'
    
    
}
// wellcome.addEventListener('click',NAME())

const nav_iteam=document.getElementById('nav_iteam')
const add_name=document.getElementById('add');

add_name.addEventListener('click', function(){
    
    let name=window.prompt("Enter name for insert nav bar")
    addNavMenu(name,null)
    console.log(nav_iteam.childNodes)
})

function addNavMenu(name,icon){
    let new_div=document.createElement('div')
    new_div.setAttribute('class','itam')
    new_div.setAttribute('id',name)
    new_div.innerHTML=`<i class= "${icon}"></i> ${name}`
    nav_iteam.appendChild(new_div);
    console.log(new_div.parentNode)
    new_div.parentNode.insertBefore(new_div,add_name)
}

// for add navbar menu you can call this addNavmenu(name,icon) funation
addNavMenu('Home','fa-solid fa-house')
addNavMenu('Address','fa-solid fa-location-dot')
addNavMenu('Location','fa-solid fa-location-crosshairs')



console.log(nav_iteam.childNodes)
nav_iteam.addEventListener('click', function(a){
    let v=a.target
    console.log(v.getAttribute('id')+' is clicked')
    if(v.matches('div')){
        v.style.backgroundColor='red'
    }
    
})
