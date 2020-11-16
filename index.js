                                       

document.querySelector("#button").addEventListener("click", function(){
    let kanye = fetch(`https://api.kanye.rest`)                            
    .then(response=> response.json())                                                //Transformer la reponse de la [promise] en JSON
    .then((data)=>{
        console.log(data)
       data= dimension.innerHTML=data.quote
       
    })
    
})
