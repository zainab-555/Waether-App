// async function search(){
//     let city= document.querySelector('.box input').value
//     const key='d4c2f19e99bb34c2142941b784fd4cfc';
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
//     let res =  await fetch(url)
//     let data =  await res.json(); // await ka matlan hota hai asynchrounus hota hai 

//     console.log(data);
// }// api
async function search() {

    let city = document.querySelector(".box .search-box input").value;

    const key = "d4c2f19e99bb34c2142941b784fd4cfc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    document.querySelector(".weather h1").innerHTML = data.main.temp + "°C";
    document.querySelector(".weather h2").innerHTML = data.name;
}

document.querySelector(".search-box button").addEventListener("click", search);