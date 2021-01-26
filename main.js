function getrandom() {
    let random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return "http://" + random_string;
}


function genhash() {
    if (window.location.hash == "") {
        window.location.hash = getrandom();
    }
}

function geturl() {
    var url = document.getElementById("urlinput").value;
    return url;
}




function shorturl() {
    alert('mike')
    var longUrl = geturl();
    alert(longUrl);
    if (!localStorage.getItem(longUrl)) {
        localStorage.setItem(longUrl, getrandom());
    }


    document.getElementById("display").innerHTML = localStorage.getItem(longUrl);

    document.getElementById("display").href = longUrl;

}