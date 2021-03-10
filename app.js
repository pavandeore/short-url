let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    let inp = document.getElementById('inp');
    let url = 'https://gentle-sierra-66467.herokuapp.com/https://cleanuri.com/api/v1/shorten';
    

    fetch(url,{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://gentle-sierra-66467.herokuapp.com/'
        },
        
        body : JSON.stringify({url : inp.value})
    })
    .then(res => res.json())
    .then(res => {
        
            console.log(res)
        
    })
    .catch(err =>{
        console.log(err)
    })
})