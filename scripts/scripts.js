document.addEventListener('DOMContentLoaded', () => {
	const listaProdutos = [
		
		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		],

		[
			'images/bolos/teste.jpg',
			'Nome do Produto',
			'Descrição do produto - Descrição do produto - Descrição do produto.',
			'Preço',
		]
	];


	const especialidades = document.querySelector('#products');


	/******BOLOS LIBRARY APPEND******/

	function createCard(library) {
		for (let i = 0; i < library.length; i++) {
			const boloDiv = document.createElement('DIV');
			boloDiv.className = 'card';
			especialidades.appendChild(boloDiv);
		}
	}

	const parent = document.getElementsByClassName('card');
		
	function createFrame(library) {
		for (let i = 0; i < parent.length; i++) {
			const frame = document.createElement('DIV');
			const img = document.createElement('IMG');
			if (i % 2 == 0) {
				frame.className = 'frame-right';
			} else {
				frame.className = 'frame-left';
			}
			img.className = 'thumb';
			frame.appendChild(img);
			parent[i].appendChild(frame);
		}

		const images = document.getElementsByClassName('thumb');
		for (let i = 0; i < library.length; i++) {
				images[i].setAttribute('src', library[i][0]);
				images[i].setAttribute('alt', library[i][1]);
		}
	}

	function createInfo(library) {
		for (let i = 0; i < parent.length; i++) {
			const info = document.createElement('DIV');
			const name = document.createElement('H3');
			const description = document.createElement('P');
			const price = document.createElement('P');
			info.className = 'info';
			name.className = 'name';
			description.className = 'description';
			price.className = 'price';
			info.appendChild(name);
			info.appendChild(description);
			info.appendChild(price);
			parent[i].appendChild(info);
		}

		const name = document.getElementsByClassName('name');
		const description = document.getElementsByClassName('description');
		const price = document.getElementsByClassName('price');
		for (let i = 0; i < library.length; i++) {
				name[i].innerHTML = library[i][1];
				description[i].innerHTML = library[i][2];
				price[i].innerHTML = library[i][3];
		}
	}

	function createProduto(area_library) {
		createCard(area_library);
		createFrame(area_library);
		createInfo(area_library);
	}

	createProduto(listaProdutos);
});

$(window).on("load",function() {
	function fade(pageLoad) {
		var windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
		var min=0, max=1, threshold=0.01;

		$(".card").each(function() {
			/* Check the location of each desired element */
			var objectHeight=$(this).outerHeight(), objectTop=$(this).offset().top, objectBottom=$(this).offset().top+objectHeight;

			/* Fade element in/out based on its visible percentage */
			if (objectTop < windowTop) {
				if (objectBottom > windowTop) {$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/objectHeight)));}
				else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
			} else if (objectBottom > windowBottom) {
				if (objectTop < windowBottom) {$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)));}
				else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
			} else if ($(this).css("opacity")<=max-threshold || pageLoad) {$(this).fadeTo(0,max);}
		});
		} fade(true); //fade elements on page-load
	$(window).scroll(function() {fade(false); }); //fade elements on scroll
});