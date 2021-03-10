let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let inp = document.getElementById('inp');
    let url = 'https://cleanuri.com/api/v1/shorten/'+inp.value;
    alert(url)

    fetch(url,{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        
        body : JSON.stringify({url : url})
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
})