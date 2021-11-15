
// headerdagi slider uchun

$(function(){
    const bgAnimate = $('.header-bg-animate');
    const pageImg = ['garden4_pic1.jpg', 'garden4_pic30.jpg', 'garden4_pic31.jpg'];
    const pageImgText = $('.page-bg');

    let page = pageImg[0];

    setInterval(function(){
        switch(page){
            case pageImg[0]:
                bgAnimate.css({
                    background: "url(./imgs/"+pageImg[1]+") repeat fixed 100%"  
                })
                pageImgText.html("02");
                page = pageImg[1];
                break;
            case pageImg[1]:
                bgAnimate.css({
                    background: "url(./imgs/"+pageImg[2]+") repeat fixed 100%"  
                })
                pageImgText.html("03");
                page = pageImg[2];
                break;
            case pageImg[2]:
                bgAnimate.css({
                    background: "url(./imgs/"+pageImg[0]+") repeat fixed 100%"  
                })
                pageImgText.html("01");
                page = pageImg[0];
                break;
            default:
                bgAnimate.css({
                    background: "url(..//imgs/"+pageImg[0]+") repeat fixed 100%" 
                })
                pageImgText.html("01");
                page = pageImg[0];
        }
    }, 5000);
})

// toggle menyu ochilishi
$(function(){
    const toggleBtn = $('.toggle-menu');
    const navLink = $('.nav-left');
    const ulLink = $('.nav-left ul');

    toggleBtn.click(function(){
        navLink.toggleClass('active');
        ulLink.toggleClass('active');
        toggleBtn.toggleClass('active');
        $('.body-right').click(function(){
            setTimeout(function(){
                navLink.removeClass('active');
                ulLink.removeClass('active');
                toggleBtn.removeClass("active");
            }, 300)
        })
    });
})


$(function(){
    const toggleBtn = $('.toggle-menu-right');
    const ulLink = $('.nav-ul-right');

    toggleBtn.click(function(){

        ulLink.toggleClass('active');
        toggleBtn.toggleClass('active');
        $('.body-right').toggleClass('active');
        $('.nav-ul-right .btn').toggleClass('active');
        $('.close-right').toggleClass('active');

        $('.close-right').click(function(){
                $('.body-right').removeClass('active')
                ulLink.removeClass('active');
                $('.nav-ul-right .btn').removeClass('active')
                toggleBtn.removeClass("active");
                $('.close-right').removeClass('active');
        })
        $('.body-right').click(function(){
                $('.body-right').removeClass('active')
                ulLink.removeClass('active');
                $('.nav-ul-right .btn').removeClass('active')
                toggleBtn.removeClass("active");
                $('.close-right').removeClass('active');
        })
    });
})
