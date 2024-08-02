$(document).ready(function(){
    
    // $(document).mousemove(function(e){
    //     var mouseX = e.pageX;
    //     var mouseY = e.pageY;

    //     $('.glassy-overlay').css({
    //         left: mouseX + -550 +"px",
    //         top : mouseY + -550 +"px"
    //     })
    // })


    $('#section0').on("mousemove", function(e) {
        const width = $(window).width();
        const height = $(window).height();
    
        const moveX = (e.pageX - width / 2) / width;
        const moveY = (e.pageY - height / 2) / height;
    
        const backMoveX = -moveX * 30;
        const backMoveY = -moveY * 10;
    
        $('.glassy-overlay').css({
            transform: `translate(${backMoveX}px, ${backMoveY}px)`
        });
    });
})

