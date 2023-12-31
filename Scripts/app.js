//GEOLOCATION LECTURE

//Geo location is a built in API that allows the user to share their location upon request

//navigator.geolocation this returns geolocation object
//getCurrentPosition method lets the web app get the current position

navigator.geolocation.getCurrentPosition(success, errorFunc);
//You can think of this as an if statement if user accepts we run success else we run errorFunc

// Once run, example of geolocation object below
// {
//     coords: {
//         latitude: 32.1234;
//         longitude: 13.1234;
//     }
// }

//If the user accepts we run success function
function success(position){
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
}

//If the user denies we run errorFunc
function errorFunc(error){
    console.log(error.message);
}


//Async Function Lecture

let rndImage = document.getElementById("rndImage");

//async function allows us to use the key word await, it pauses the execution of the code until the promise is fufilled

async function apiCall(){
    //We make a fetch request this is our promise

    const promise = await fetch('https://randomuser.me/api/');
    //wait for our response and parse it into json data
    const data = await promise.json();

    console.log(data.results[0].picture.large);
    rndImage.src = data.results[0].picture.large;
}

apiCall();