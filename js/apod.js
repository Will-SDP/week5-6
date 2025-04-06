const api_key = '7FrcB5NSylrQaCmOnIgM87y9jBBIbSgu1frAhrK9' 
const url = 'https://api.nasa.gov/planetary/apod?api_key=7FrcB5NSylrQaCmOnIgM87y9jBBIbSgu1frAhrK9'
document.getElementById('date').value = new Date().toISOString().split("T")[0];
document.getElementById('date').max = new Date().toISOString().split("T")[0];

async function getImage(url) {
    let result = await fetch(url);
    let apod = await result.json();
    document.getElementById('apod-image').src = apod.url
    document.getElementById('apod-text').innerText = apod.explanation


}

document.getElementById('date').addEventListener('change', function(e){
    newUrl = url + "&date=" + e.target.value
    getImage(newUrl)
})

getImage(url)

// https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today