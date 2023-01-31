let botaoIMG = document.querySelector('#nasa')
let pause = document.querySelector('#img')
let keyapi = 'QOS8G4g0HhkdFg18WTfivM9Q6dMtrLZeG4oaM1W9'
let url = `https://api.nasa.gov/planetary/apod?api_key=${keyapi}`;

let check = false;

botaoIMG.addEventListener("click", () => {

    console.log("Apertou o botão")
    sendApiRequest()
    document.querySelector('#descricao').innerHTML = ``
    document.querySelector('#pause').innerHTML = `Clique no FaceIcone para parar a música!`
    buttonIMG.removeEventListener("click", click);

})

pause.addEventListener("click", () => {

    audio.pause()

})

async function sendApiRequest() {
    let response = await fetch(url);
    console.log(response)
    let data = await response.json()
    console.log(data)
    if (check == false) {
        useApiData(data);
    }
    check = true;
}

function useApiData(data) {
    document.querySelector('#resultadotxt').innerHTML += data.explanation
    document.querySelector('#resultado').innerHTML += `<img src="${data.url}">`

    const audio = document.querySelector('#audio')
    audio.play()

}