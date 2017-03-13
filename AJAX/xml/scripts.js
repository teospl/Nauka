function pobierzAlbumy(){
    var req = createReq();
    if(req == null){
        alert("blad");
        return;
    }
    var url = "kolekcja.xml";
    req.open("GET", url, true);
    req.onreadystatechange = function(){
        if(isReady(req)){
            parsujXML(req.responseXML);
        }
    }
    req.send(null);
}

function parsujXML(xml){
    var albumy = xml.getElementsByTagName("album");
    
    for(var i in albumy){
        var id = albumy[i].getAttribute("id");
        var tytul = albumy[i].getElementsByTagName("tytul")[0].firstChild.nodeValue;  
        var wykonawca = albumy[i].getElementsByTagName("wykonawca")[0].firstChild.nodeValue;
        
        var utworyList = albumy[i].getElementsByTagName("utwor");
        var utwory = new Object();
        for(var i=0; i<utworyList.length; i++){
            var klucz = utworyList[i].firstChild.nodeValue;
            var wartosc = utworyList[i].getAttribute("czas");
            utwory[klucz] = wartosc;
        }
        drukujAlbum(id, tytul, wykonawca, utwory);
    }
}

function stworzWiersz(tytul, wartosc) {
    var row = document.createElement("div");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(tytul));
    row.appendChild(span);
    row.appendChild(document.createTextNode(wartosc));
    return row;
}

function stworzWierszUtworu(tytul, czas) {
    var row = document.createElement("p");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(tytul));
    row.appendChild(span);
    row.appendChild(document.createTextNode(czas));
    return row;
}

function drukujAlbum(id, tytul, wykonawca, utwory) {
    var kolekcja = document.getElementById("kolekcja");

    var tytulRow = stworzWiersz("Tytuł albumu: ", tytul);
    var wykonawcaRow = stworzWiersz("Wykonawca: ", wykonawca);
    var utworyRow = stworzWiersz("Utwory: ", utwory);

    for(var i in utwory){
        var utwor = stworzWierszUtworu(i, utwory[i]);
        utworyRow.appendChild(utwor);
    }

    var album = document.createElement("div");
    album.setAttribute("id", id);
    album.setAttribute("class", "album");

    album.appendChild(tytulRow);
    album.appendChild(wykonawcaRow);
    album.appendChild(utworyRow);

    kolekcja.appendChild(album);
}

window.onload = pobierzAlbumy;