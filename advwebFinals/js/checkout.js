var ordersCookie = $.cookie('orders');
var orderCart = ordersCookie ? JSON.parse(ordersCookie) : [];
if (orderCart.length > 0) {
	$('.cart-qty').text(' (' + orderCart.length + ')');
}

var orders = JSON.parse($.cookie('orders'));
var subtotal = 0;
if (orders!=0) {
    $('.productTable').append (
        '<thead>' +
            '<tr>' +
                '<th>Item</th>' +
                '<th>Price</th>' +
                '<th>Qty</th>' +
                '<th>Total</th>' +
                '<th id="delete"></th>' +
            '</tr>' +
        '</thead>'
        
    );

    for (var ctr = 0; ctr < orders.length; ctr++) {
        $('.listHere').append (
            '<tr>' +
            '<td>' + orders[ctr].item + '</td>' +
            '<td>' + orders[ctr].price + '</td>' +
            '<td>' + orders[ctr].qty + '</td>' +
            '<td>' + orders[ctr].total + '</td>' +
            '<td>' + '<button class="remove-item btn btn-danger">Remove</button>' + '</td>' +
            '</tr>'
        );
        
        subtotal = subtotal + orders[ctr].total;
    }
    
        $('.subtotal').append (
            '<h4>SUBTOTAL:</h4>'+
            '<h5>' + subtotal + '</h5>'
        );
} else {
    $('.subtotal').append(
        '<h4>Your cart is empty<h4>' +
        '<h5>Click <a href="finals.html>here </a> to view products.</h5>'
    );
}

$('#empty-cart').click(function(event) {
	$.removeCookie('orders');
    orderCart = [];
    $('.table').empty();
    $('.cart-qty').empty();
    $('.subtotal').empty();
    $('.subtotal').append(
        '<h4>Your cart is empty<h4>'
    );
	event.preventDefault();
});

$('.remove-item.btn.btn-danger').click(function(event) {
    console.log('hello deleted na');

    //var thisCookie = $('orders');
    //$.removeCookie('ordersCookie[]');

    /*var removeItem = $.cookie('removeThis');
    var storeHere = $(this).siblings('name');
    removeItem.push(storeHere);
    $.removeCookie('removeThis');*/

    /*orders.splice(1,1);
    console.log(orders[]);*/

    /*var currentOrders = JSON.stringify(ordersCookie);
    var storeHere = (this).currentOrders.item;
    var removeItem;

    for(var ctr = 0; ctr < orders.length; ctr++){
        if(storeHere == currentOrders.name);
        {
            removeItem = ctr;
        }
    }*/

    //orders.splice(0, 1);

    /*var removeCookie = $.cookie('removeItem');
    var removeThis = removeCookie;
    
    removeThis.push(orders[0]);*/
    

    event.preventDefault();
});

