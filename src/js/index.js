// Javascript Entry Point
import data from './items';
import $ from 'jquery';

var items = data.results; //array

function createListing(product) {
	
	var picture = product.Images[0].url_170x135;

	return `
	<div class="listing">
		<div class="picture"><img src = "${picture}" alt="photo"></div>
		<div class="title">${product.title}</div>
		<div class="price">${product.price}</div>
	</div>
	`; 
};

items.forEach(function(product){
	$('main').append(createListing(product));
});

