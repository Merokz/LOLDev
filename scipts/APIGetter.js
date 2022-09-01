function xhr(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

var config;

xhr("config.json", function (response) {
    config = JSON.parse(response);
});

API = {
    Summoner: function () {
        xhr(`https://${config.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${config.summonerName}?api_key=${config.APIKey}`, function (response) {
            console.log(JSON.parse(response));
        });
    }
}