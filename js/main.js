new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    navigation: true,
	navigationPosition: 'right',
	// 하이퍼링크
	anchors:['num0', 'num1','num2','num3','num4'],

	afterLoad: function(origin, destination, direction, trigger){
		// origin -> 해당 섹션을 벗어났을 때
		// destination -> 해당 섹션이 들어왔을 때

        var origin = this;
		// console.log(`원래섹션:${origin} / 새로운섹션:${destination} / 방향:${direction}`)

        //using index
		if(destination.index == 0 ){
			sec_in0() // 섹션0
        }else if(destination.index == 1){
			sec_in1() // 섹션1
		}else if(destination.index == 2 ){
			sec_in2() // 섹션2
        }else if(destination.index == 3 ){
			sec_in3()
        }else if(destination.index == 4 ){
			sec_in4()
        }
		
		
		if(origin.index == 1){
			sec_out1() // 섹션1
		}else if(origin.index == 2){
			sec_out2() // 섹션2
		}
    }
});

function sec_in0(){
	$('#section0.active .inner h1').addClass('on');
	anime({
		targets: '.intro_svg path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeOutQuint',
		duration: 2500,
		delay: function(el, i) { return i * 500 },
		direction: 'alternate',
		loop: true,
		delay: 1100,
	});
}
function sec_in1(){
	// window.alert("이은지의 About 페이지입니다.")
	// 해당 색션에 들어오면
		let tl = anime.timeline({
			easing: 'easeInOutExpo',
			duration: 500,
		});

		tl
		.add({
			targets: '.g1 , .g1 span',
			height: '99%',
			duration: 1000,
			opacity:'1',
			delay: 2000,
		})
		.add({
			targets: '.g2 , .g2 span',
			height: '99%',
			duration: 1000,
			opacity:'1',
		})
		.add({
			targets: '.g3 , .g3 span',
			height: '99%',
			duration: 1000,
			opacity:'1',
		})
		.add({
			targets: '.g4 , .g4 span',
			height: '95%',
			duration: 1000,
			opacity:'1',
		})
		.add({
			targets: '.g5 , .g5 span',
			height: '95%',
			duration: 1000,
			opacity:'1',
		})
		.add({
			targets: '.g6 , .g6 span',
			height: '70%',
			duration: 1000,
			opacity:'1',
		})
		.add({
			targets: '.g7 , .g7 span',
			height: '80%',
			duration: 1000,
			opacity:'1',
		})
		.add({
			targets: '.g8 , .g8 span',
			height: '80%',
			duration: 1000,
			opacity:'1',
		})
}

function sec_out1(){
	anime({
		targets: '.gage_in, .gage_in span',
		height: 0,
		opacity: 0,
	})
}


function sec_in2(){
	let tl2 = anime.timeline({
		easing: 'easeInOutExpo',
		duration: 500,
	});

	tl2
	.add({
		targets: '.g1_1',
		width: '99%',
		duration: 1500,
		opacity:'1',
		delay:1000,
	})
	.add({
		targets: '.g1_1 span, .g2_1 span , .g3_1 span, .g4_1 span, .g5_1 span, .g6_1 span, .g7_1 span, .g8_1 span',
		duration: 300,
		opacity:'1',
	})
	.add({
		targets: '.g2_1',
		width: '99%',
		duration: 1500,
		opacity:'1',
	})
	.add({
		targets: '.g3_1',
		width: '99%',
		duration: 1500,
		opacity:'1',
	})
	.add({
		targets: '.g4_1',
		width: '95%',
		duration: 1500,
		opacity:'1',
	})
	.add({
		targets: '.g5_1',
		width: '95%',
		duration: 1500,
		opacity:'1',
	})
	.add({
		targets: '.g6_1',
		width: '70%',
		duration: 1500,
		opacity:'1',
	})
	.add({
		targets: '.g7_1',
		width: '80%',
		duration: 1500,
		opacity:'1',
	})
	.add({
		targets: '.g8_1',
		width: '80%',
		duration: 1500,
		opacity:'1',
	})
	.add({
		targets: '.etc_li1',
		duration: 1000,
		opacity:'1',
	})
	.add({
		targets: '.etc_li2',
		duration: 1000,
		opacity:'1',
	})
	.add({
		targets: '.etc_li3',
		duration: 1000,
		opacity:'1',
	})

}
function sec_out2(){
	anime({
		targets: '.gage_in, .gage_in span',
		width: 0,
	})
}
function sec_in3(){
	// window.alert("이은지의 Gallery 페이지입니다.")
}
function sec_in4(){
	// window.alert("이은지의 Contact 페이지입니다.")
}



// 1. 문서객체 선택
let btn = document.querySelector('.btn_menu');
let nav = document.querySelector('nav');
let allmenu = document.getElementById('allmenu_wrap');
let menu_btn = document.querySelectorAll('#allmenu .menu ul li')


// 2. 이벤트 발생
btn.addEventListener('click',function(){
    btn.classList.toggle('on');
	nav.classList.toggle('on');
	allmenu.classList.toggle('on');
})


$(function(){
	$('#allmenu .menu ul>li>a').click(function(){
		$('.btn_menu').removeClass('on');
		$('nav').removeClass('on');
		$('#allmenu_wrap').removeClass('on');
	})
})

$(window).on('load',function(){
	$('#section0.active .inner h1').addClass('on');
})

// section4.tab btn

$(function(){
    $('.tab_btn li').on('click',function(){
        const num = $(this).index();
        console.log(num);
        $(this).addClass('on').siblings().removeClass('on');

        $('.list_wrap').hide();
        $('.list_wrap').eq(num).fadeIn(1000);
    })

	// section 2 프로젝트
	$('.title_inner .tab_list li').on('click',function(){
		let num = $(this).index();

		$('.tab_list li').removeClass('on');
		$(this).addClass('on');

		if(num == 0){
            $('.project_slide').hide();
            $('.project_slide').eq(0).fadeIn(800);
        }else if(num == 1) {
            $('.project_slide').hide();
            $('.project_slide').eq(1).fadeIn(800);
        }else{
			$('.project_slide').hide();
            $('.project_slide').eq(2).fadeIn(800);
		}

		$('.project_slide').slick('setPosition');
		$('.project_slide').slick('slickGoTo', 0); 
	})

	$('.project_slide').slick({
		arrows:false,
		autoplay: false,
		slidesToShow:2,
		infinite:false,
	});
})



