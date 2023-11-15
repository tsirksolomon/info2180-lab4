window.onload = function(){
    let searchButton = document.querySelector("button");

    searchButton.addEventListener("click", heroSearch);
    
    function heroSearch() {
        const xttp = new XMLHttpRequest();
        xttp.onload = function() {
            window.alert(this.responseText);
        }
        xttp.open("GET", "info2180-ajax-superheroes-master/superheroes.php");
        xttp.send();
    }
}