const nav = document.querySelector('nav')
const icon = document.getElementById('icon')


icon.onclick = () =>{
    icon.classList.toggle('fa-times')
    nav.classList.toggle('active')
}

if (icon) {
    icon.classList.add('active')
}

window.onscroll = () =>{
    icon.classList.remove('fa-times')
    nav.classList.remove('active')
}



// search section

const search = () =>{
    const searchbox = document.getElementById('search').value.toUpperCase();
    const storeditems = document.getElementById('product')
    const product = document.querySelectorAll('"pro-box')
    const productName = document.getElementsByTagName('h4')

    for(let i=0; i < productName.length; i++){
        let match = product[i].getElementsByTagName('h4')[0];

        if(match){
           let textValue = match.textContent || match.innerHTML

           if(textValue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = '';
           }else{
            product[i].style.display = 'product not found';
           }
        }
    }
}
