
function getRecipe() {
    let request;
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }
    else{
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    let searchInput = document.getElementById("search");
    // let topBlock = document.getElementById("js_top");
    // let errorBlock = document.getElementById("js_error");
    // let inpCity = searchInput.value;

    request.open("GET", "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2");
    request.onload = function(){
        if(request.status === 200){
            topBlock.style.display = 'block'
            errorBlock.style.display = 'none'
            let weatherObj = JSON.parse(request.response)
            console.log(weatherObj);
            searchInput.value = '';
            today = new Date;
            js_today.innerText = String(today.getDate()).padStart(2, '0') + '.' + String(today.getMonth() + 1).padStart(2, '0') + '.' + today.getFullYear();
            city_name.innerText = weatherObj.name
            tempId.innerText = weatherObj.main.temp
            tempMin.innerText = weatherObj.main.temp_min
            tempMax.innerText = weatherObj.main.temp_max
            windSpeed.innerText = weatherObj.wind.speed
            description.innerText = weatherObj.weather[0].description
            imagePath = "http://openweathermap.org/img/wn/" + weatherObj.weather[0].icon +"@2x.png"
            weatherImg.src = imagePath
        } else if (request.status === 404) {
            errorBlock.style.display = 'block'
            topBlock.style.display = 'none'
        }
    }
    request.send();

}