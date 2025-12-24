function changeheading() {

    a = document.getElementById("heading").innerHTML

    if (a == "Hello!") {
    document.getElementById("heading").innerHTML = 'Goodbye!'
    }
    else {document.getElementById("heading").innerHTML = 'Hello!'
    }

}

