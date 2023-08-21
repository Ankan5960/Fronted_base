const div=document.getElementById('nav_iteam')
const add_name=document.getElementById('add');
add_name.addEventListener('click', function(){
    let new_div=document.createElement('div')
    new_div.setAttribute('class','itam')
    div.append(new_div);
    let name=window.prompt("Enter name for insert nav bar")
    new_div.innerText=name
    new_div.parentNode.insertBefore(new_div,add_name)
})
