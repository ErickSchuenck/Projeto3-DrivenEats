function change_color_food(e){
    change_color(e,'.foods');
}

function change_color_drink(e){
    change_color(e,'.drinks');
}

function change_color_dessert(e){
    change_color(e,'.desserts');
}

function change_color(e,foodType){
    let dishes = document.querySelector(foodType);
    
    let selectedItem = dishes.querySelector(".selected");
    if(selectedItem && selectedItem !== e.currentTarget){
        selectedItem.classList.remove("selected");
    }
    e.currentTarget.classList.toggle("selected");

    toggle_finish_order();
}

function toggle_finish_order(){
    if (document.querySelectorAll('.selected').length == 3){
        document.querySelector('.footer_inside').classList.add('enabled');
    } else {
        document.querySelector('.footer_inside').classList.remove('enabled');
    }
}