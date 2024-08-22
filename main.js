var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul')

menuIcon.addEventListener('click', ()=>
    {
    if (ul.classList.contains('active'))
    {
        ul.classList.remove('active');
    }
    else 
    {
        ul.classList.add('active')
    }
    })