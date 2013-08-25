$(function() {
	$('.scribble img').hover(hoverInHandler, hoverOutHandler);
});

function hoverInHandler(evt) {
	hoveredScribble = evt.target

	var scribbles = $('.scribble img')

	var $winner = $(evt.target.parentNode), $loser
	for(var i = 0; i<scribbles.length; i++) {
		if(scribbles[i] != evt.target) {
			$loser = $(scribbles[i].parentNode)
			break
		}
	}

	console.log($winner, $loser)

	colour($winner, '0, 128, 0')
	$winner.css('background-image','url(assets/thumbs_up.png)')
	colour($loser, '128, 0, 0')
	$loser.css('background-image','url(assets/thumbs_down.png)')
}

function colour(element, c) {
	var solid = 'rgb('+c+')'
	var trans = 'rgba('+c+', 0.1)'
		element.
			css('border-color', solid).
			css('background-color', trans);
	}

function hoverOutHandler(evt) {
	$('.scribble').
			css('border-color', 'black').
			css('background-color', 'white').
			css('background-image','');
}

function submit(winner, loser) {
	$('input#winner').val(winner)
	$('input#loser').val(loser)
	$('form#submit').submit()
}