var btn = document.querySelector("#btn");
var image = document.querySelector("#avatar")
var fullName = document.querySelector("#fullname")
var userName = document.querySelector("#username")
var email = document.querySelector("#email")
var city = document.querySelector("#city")
var url = "https://randomuser.me/api/"
btn.addEventListener("click", function() {
    fetch(url)
        .then(ErrorHandling)
        .then(updateProfile)
        .catch(function(error) {
            console.log("The server responsed with status Code " + error);
        })
});

function ErrorHandling(request) {
    if (!request.ok) {
        throw (request.status);
    }
    return request;
}

function updateProfile(response) {
    response.json().then(function(jsonData) {
        var data = jsonData.results[0];
        image.src = data.picture.medium;
        fullName.innerText = data.name.first + " " + data.name.last;
        userName.innerText = data.login.username;
        email.innerText = data.email;
        city.innerText = data.location.city;
    });
}