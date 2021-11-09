
document.addEventListener('DOMContentLoaded',() => {

    document.querySelector('#submit').disabled=true;

    document.querySelector('#task').onkeyup=()=>{
    if(document.querySelector('#task').value.length > 0){
        document.querySelector('#submit').disabled=false;
    }

    else{
        document.querySelector('#submit').disabled=true;
    }
}

    document.querySelector('form').onsubmit = () => {
        const tsk = document.querySelector('#task').value;
        console.log(tsk);
        const li = document.createElement('li');
        li.innerHTML = tsk;
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value='';
        return false;
    }

  
})

