var menu_list_array=["DEALUXE VEGGIE","SIZZLIN BARBEQUE","ZIMBABWE BABENEOS","INDIAN TANDOORI PIZZA","CHICKEN TANDOORI","PASTA PIZZA"];
function getmenu(){
    var htmlDATA;
    htmlDATA="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmlDATA=htmlDATA+'<li>'+menu_list_array[i]+'</li>';
    }
    htmlDATA=htmlDATA+'</ol>';
    document.getElementById("display_menu").innerHTML=htmlDATA;
    //
    display_addedMenu();
}

function display_addedMenu() {
    var htmlDATA = '';
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmlDATA+="<div class='pizza-display'>";
        htmlDATA+= "<img class='pizza-img' src='./images/pizzaImg.png'><div class='pizza-title'>"+menu_list_array[i]+"</div>"
        htmlDATA+= "</div>"
    }
    document.getElementById("pizza-holder").innerHTML=htmlDATA;
}

function add_item() {
    var inputValue = document.getElementById("add_item").value;
    if(inputValue.length >= 1){
        menu_list_array.push(inputValue)
    }
    getmenu();
}
   