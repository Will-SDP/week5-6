
body = document.getElementsByTagName('body')
var menu_visible = false
menuBtns = document.querySelectorAll('.menu-btn')

function toggle_menu(){
    menu_visible = !menu_visible
    document.getElementById('menu').classList.toggle('hide')
    
}

body[0].addEventListener("click", function(e){
    if(e.pageX > 252 && menu_visible == true && e.target.tagName != 'I' ){
        toggle_menu()
    }
})

menuBtns.forEach(element => {
    element.addEventListener("keypress", function(e){
        if(e.key == "Enter"){
            toggle_menu()
        }
    })
});

