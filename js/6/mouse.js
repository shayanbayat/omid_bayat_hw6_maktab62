document.addEventListener('mousemove', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX+50;
        mousePosY = e.pageY+50;
        mouseCircle.style.top = mousePosY + 'px';
        mouseCircle.style.left = mousePosX + 'px';
        if(mousePosX >=341 && mousePosX< 578 &&(mousePosY >= 391&& mousePosY < 630)){
            document.getElementById('change-info').style.visibility = 'visible'
            document.getElementById('change-name').style.visibility = 'visible'
            mouseCircle.style.background = 'black'
            document.getElementById('change-name').innerHTML = "دایره مشکی:"
            let x = mousePosX-341
            let y = mousePosY-391
            document.getElementById('change-info').innerHTML = "("+x+","+y+")"
            document.getElementById('red').innerHTML="("+x+","+y+")"
        }
        else if(mousePosX >=994 && mousePosX< 1230 &&(mousePosY >= 391&& mousePosY < 630)){
            document.getElementById('change-info').style.visibility = 'visible'
            document.getElementById('change-name').style.visibility = 'visible'
            mouseCircle.style.background = 'red'
            document.getElementById('change-name').innerHTML = "دایره قرمز:"
            let x = mousePosX-994
            let y = mousePosY-391
            document.getElementById('change-info').innerHTML = "("+x+","+y+")"
            document.getElementById('black').innerHTML="("+x+","+y+")"
        }
        else{
            mouseCircle.style.background = 'white'
            document.getElementById('change-info').style.visibility = 'hidden'
            document.getElementById('change-name').style.visibility = 'hidden'
            document.getElementById('black').innerHTML="(0,0)"
            document.getElementById('red').innerHTML="(0,0)"
        }

        document.getElementById('circle').innerHTML = "("+mousePosX+","+mousePosY+")"
        mousePosX = mousePosX-50
        mousePosY = mousePosY-50
        document.getElementById('mouse').innerHTML = "("+mousePosX+","+mousePosY+")"

    }


    // let circlePosX = 0,
    //     circlePosY = 0;
    //
    // function delayMouseFollow() {
    //     requestAnimationFrame(delayMouseFollow);
    //
    //     circlePosX += (mousePosX - circlePosX)+100 ;
    //     circlePosY += (mousePosY - circlePosY)+100 ;
    //
    //     mouseCircle.style.top = circlePosY + 'px';
    //     mouseCircle.style.left = circlePosX + 'px';
    // }
    // delayMouseFollow();
});