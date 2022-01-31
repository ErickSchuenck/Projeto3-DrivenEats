let food = ""
let drink = ""
let dessert = ""
let food_price = ""
let drink_price = ""
let dessert_price = ""

function change_color_food(e){
    change_color(e,'.foods');
    food = "";
    food= e.currentTarget.querySelector('h1').innerHTML;
    food_price = "";
    food_price = parseFloat(e.currentTarget.querySelector('h5').innerHTML.replace(',', '.').replace('R$ ',''));
}

function change_color_drink(e){
    change_color(e,'.drinks');
    drink = "";
    drink = e.currentTarget.querySelector('h1').innerHTML;
    drink_price = "";
    drink_price = parseFloat(e.currentTarget.querySelector('h5').innerHTML.replace(',', '.').replace('R$ ',''));
}

function change_color_dessert(e){
    change_color(e,'.desserts');
    dessert = "";
    dessert = e.currentTarget.querySelector('h1').innerHTML;
    dessert_price = "";
    dessert_price = parseFloat(e.currentTarget.querySelector('h5').innerHTML.replace(',', '.').replace('R$ ',''));
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
        document.querySelector('.footer_inside').classList.add('green');
        document.querySelector('.footer_inside').disabled = false;
        document.querySelector('.footer_inside h1').innerHTML = "Confirme seu pedido";


    } else {
        document.querySelector('.footer_inside').classList.remove('green');
        document.querySelector('.footer_inside').disabled = true;
        document.querySelector('.footer_inside h1').innerHTML = "Selecione os 3 itens para fechar o seu pedido";
    }
}


function send_message(){
    let pedido = ("- Prato: " + food + ", " + "- Bebida: "+ drink + ", " + "- Sobremesa: " + dessert);
    let total_price = ((food_price + drink_price + dessert_price).toFixed(2));
    total_price = total_price.toString().replace('.', ',');
    const name = prompt("qual é seu nome?");
    const adress = prompt("qual é seu endereço?"); 
    let final_message =  `Olá, meu nome é ${name} gostaria de fazer o pedido:
    - Prato: ${food}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: R$ ${total_price}
    Enviar para o endereço: ${adress}`
    window.open(`https://wa.me/553288749578?text=${encodeURIComponent(final_message)}`);
}