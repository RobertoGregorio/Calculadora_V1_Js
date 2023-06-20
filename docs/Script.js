
var buttomTheme = document.getElementById('buttom')
var display = document.getElementById('NumberBox')
var divMain = document.getElementById('divMain')



function AddValue(elementValue) {
    display.innerText += elementValue
}

function CleanValue() {
    display.innerText = "";
}

function BackValue() {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
}

function calculator() {

    display.innerText = eval(display.innerText)
}

function AlterTheme() {

    var buttomThemeBackground = document.getElementById('CheckBox')
    var buttomIcon = document.getElementById('icon')

    if (buttomTheme.style.marginLeft == '25px') {

        buttomTheme.style.marginLeft = '0px'
        buttomThemeBackground.style.backgroundColor = '#6BB3F2'
        buttomIcon.src = 'icons/sol.png'

        document.body.style.backgroundColor = '#899DD9'
        divMain.style.background = '#7ca1b3'
    }
    else {

        buttomTheme.style.marginLeft = '25px'
        buttomThemeBackground.style.backgroundColor = '#1E2426'
        buttomIcon.src = 'icons/lua.png'

        document.body.style.backgroundColor = '#3F4B57'
        divMain.style.background = '#1E2426'

    }

}









//Logica para troca de sinal simultanea
/*
function AddCalc(a) {

    if (display.innerText.indexOf('*') != null) {
        var b = display.innerText.split("*").length
        var i = 1;
        for (i; i < b; i++) {
            display.innerText = display.innerText.replace("*", a)
        }
    }
    else{
        display.innerText += a;
    }
    if (display.innerText.indexOf('+') != null) {
        var b = display.innerText.split("+").length
        var i = 1;
        for (i; i < b; i++) {
            display.innerText = display.innerText.replace("+", a)
        }
    }
    else{
        display.innerText = a;
    }

    if (display.innerText.indexOf('-') != null) {
        var b = display.innerText.split("-").length
        var i = 1;
        for (i; i < b; i++) {
            display.innerText = display.innerText.replace("-", a)
        }
    }
    else{
        display.innerText = a;
    }
}

*/
