// Javascript Entry Point
import data from './items';
import $ from 'jquery';

var items = data.results; //array

function createListing(product) {
	
	var picture = product.Images[0].url_170x135;

	return `
	<div class="listing">
		<div class="picture"><img src=${picture} height="179.55px" width="226.1px" alt="photo"></div>
		<div class="title">${product.title}</div>
		<div class="seller">${product.Shop.shop_name}</div>
		<div class="price"><span>${product.price}</span></div>
	</div>
	`; 
};

items.forEach(function(product){
	$('main').append(createListing(product));
});

