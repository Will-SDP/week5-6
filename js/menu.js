
body = document.getElementsByTagName('body')
var menu_visible = false

function toggle_menu(){
    document.getElementById('menu').classList.toggle('hide')
    menu_visible = !menu_visible
}

body[0].addEventListener("click", function(e){
    if(e.pageX > 252 && menu_visible == true ){
        toggle_menu()
    }
})