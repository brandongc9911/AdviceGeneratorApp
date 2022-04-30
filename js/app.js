const advice = document.querySelector('.advice');
const quote = document.querySelector('.quote');


async function getData(){
    const url = 'https://api.adviceslip.com/advice';

    const resultado = await fetch(url);
    const getData = await resultado.json()
    const data = getData.slip;


    

    advice.textContent = `Advice # ${data.id}`;
    quote.textContent = data.advice;

    
    
}

getData();

setInterval(()=>{
    getData();
},8000)









