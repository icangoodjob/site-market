// Может ли браузер отобразить формат webP. Если да,то добавляет body класс _webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('webp');
	} else {
		document.querySelector('html').classList.add('no-webp');
	}
});

$('.social-group').click(function(){
	$('.main-social__list').slideToggle(500,function () {
		$(this).toggleClass('show');
	});
});
	// const targetElement = e.target;
	// if (targetElement.classList.contains('.search-form__icon')) {
	// 	document.querySelector('.search-form__item').classList.toggle('active');
	// } else if (!targetElement.closest('.search-form__item') && document.querySelector('.search-form__item.active')) {
	// 	document.querySelector('.search-form__item').classList.remove('active');
	// };


