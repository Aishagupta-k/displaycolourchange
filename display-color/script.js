const buttons = document.querySelectorAll(".button");
const boddy = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function(e){
       if(e.target.id=== 'grey') {

        boddy.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== 'red') {

        boddy.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== 'yellow') {

        boddy.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== 'white') {

        boddy.style.backgroundColor = e.target.id;
    }
    } )
});
