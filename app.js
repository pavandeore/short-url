let btn = document.getElementById('btn');


btn.addEventListener('click',()=>{
    let resultDiv = document.getElementById('result');
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
        
        inp.value=res.result_url;
        inp.select();
        inp.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
        resultDiv.innerHTML = 'Copied ! ';
        setTimeout(() => {
            resultDiv.innerHTML = "";
        }, 1500);
    })
    .catch(err =>{
        console.log(err)
    })
})