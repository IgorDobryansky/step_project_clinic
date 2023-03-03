document.getElementById("search_input").oninput = function(){
    let value = this.value.trim();
    //let visitElem = [responseObject];
    //console.log(visitElem);
    if ( value != ''){
        responseObject.forEach(function(elem){
            if (elem.innerText.search(value) == -1){
                elem.classList.add("hideVisit");
            } else {
                elem.classList.remove("hideVisit");
            }
        });
    }
}

