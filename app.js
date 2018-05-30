    var form = document.getElementById("main");
    var input = document.getElementById("input");
    var img = document.getElementById("images");
    form.addEventListener("submit", function (event){
        img.innerHTML = "";
        event.preventDefault();

        var result = input.value;

    function eventListener(){
        var data = JSON.parse(this.responseText);
        console.log('data',data)
        var div = document.getElementById("images");

        for(var i=0;i<5;i++){
            var newImg = document.createElement('img');
            newImg.src =  data.data[i].images.original.url;
            div.appendChild(newImg);
    }
}
var req = new XMLHttpRequest;
    req.addEventListener("load", eventListener);
    req.open("GET", "http://api.giphy.com/v1/gifs/search?q=" + result + "&api_key=whkBthtmqmKvXxWW9CRnz72McvYLylVJ&limit=5");
    req.send()
    });






