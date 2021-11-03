document.getElementById('div').onmouseover = function (){
    this.classList.remove('blue')
    this.classList.add('red')
}
document.getElementById('div').onmouseout = function (){
    this.classList.remove('red')
    this.classList.add('blue')
}