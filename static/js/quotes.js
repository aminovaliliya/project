const quotes = ["Цитата 1",
"Цитата 2",
"Цитата 3"
]

function quote(){
    quoteIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById('quoteText').innerHTML = quotes[quoteIndex];

    picIndex = Math.floor(Math.random() * ( picCount))

    let path = String(quoteIndex).length<2 ? "static/img/0" + quoteIndex + ".jpg": "static/img/" + quoteIndex + ".jpg"
    document.getElementById('quotePic').src = path;
    document.getElementById('quotePic').style = "height: 100px;";  
    

}
