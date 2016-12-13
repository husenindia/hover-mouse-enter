/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 01-06-2016 : (DF mm-dd-yyyy)
/*************************/
$(document).ready(function (e) {
    var glMouseX;
    $('html').mousemove(function (e) {        
        //console.log('body top ' + e.pageX);
        //console.log('body left ' + e.pageY);
        glMouseX = e.pageX;
        glMouseY = e.pageY;
    })
    //console.log(glMouseX);
    //console.log('top ' + $(this).offset().top);
    //console.log('left ' + $(this).offset().left);
    var mouseXpos = function (e) {
        console.log(e.pageX);
        console.log(glMouseX);
        if(e.pageX>glMouseX)
        {
            return true;
        } else {
            return false;
        }
    }
    $('ul li').mouseenter(function (e) {
        if (mouseXpos(e)) {
            console.log('from left');
        } else {
            console.log('from right');
        }
        //console.log(glMouseX);
        ////console.log('top ' +  $(this).offset().top);
        //console.log('left ' + $(this).offset().left);
        //console.log('mouse  left' + e.pageX);
        //console.log('mouse left ' + e.pageY);
    })
})