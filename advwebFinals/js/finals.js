var ordersCookie = $.cookie('orders');
var orderCart = ordersCookie ? JSON.parse(ordersCookie) : [];
if (orderCart.length > 0) {
	$('.cart-qty').text(' (' + orderCart.length + ')');
}

$('.add-cart.btn.btn-primary').click(function(event) {
	var $quantity = $(this).siblings('input');
	var qtyValue = $quantity.val();
    var itemValue = $(this).data('item');
    var itemPrice = $(this).data('price');
    var itemTotal = qtyValue * itemPrice;

		if (qtyValue <= 0) {
	        $(this).siblings('.alert').text('Invalid amount. Please enter a number higher than 0.');
	        setTimeout(function() {
				$('.alert').empty();
			}, 8000),
		} else if (qtyValue > 0) {
				var order = {qty: qtyValue, item: itemValue, price: itemPrice, total: itemTotal};

				orderCart.push(order);

				var cartString = JSON.stringify(orderCart);
						$.cookie('orders', cartString);

				$(this).siblings('.alert').text('Successfully added to cart');
				setTimeout(function() {
					$('.alert').empty();
				}, 2000);

				$('.cart-qty').text('(' + orderCart.length + ')');
		}


    event.preventDefault();
});
