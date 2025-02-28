const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        switch (e.target.id){
            case 'violet': body.style.backgroundColor=e.target.id;
                           break;
            case 'indigo': body.style.backgroundColor=e.target.id;
                           break;
            case 'blue': body.style.backgroundColor=e.target.id;
                           break;
            case 'green': body.style.backgroundColor=e.target.id;
                           break;
            case 'yellow': body.style.backgroundColor=e.target.id;
                           break;
            case 'orange': body.style.backgroundColor=e.target.id;
                           break;
            case 'red': body.style.backgroundColor=e.target.id;
                           break;
        }

    })
})
