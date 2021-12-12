( function () {

	const button_config = [
		{
			code: "spam",
			label: "spam",
			desc: "Spam, low-effort, or off-topic"
		},
		{
			code: "trolling",
			label: "troll",
			desc: "Trolling"
		},
		{
			code: "violence",
			label: "viol",
			desc: "Violence"
		},
		{
			code: "repost",
			label: "rp",
			desc: "Repost"
		},
		{
			code: "ceo",
			label: "ceo",
			desc: "CEO / Politician"
		}
	];

	function addElementOverlay ( target ) {
		target.classList.add( 'nw-has-overlay' );

		var overlay = document.createElement( 'div' );
		overlay.setAttribute( 'class', 'nw-overlay' );

		for ( var i in button_config ) {
			var this_config = button_config[i];
			var button = document.createElement( 'button' );
			button.append( this_config.label );
			button.setAttribute( 'title', this_config.desc );
			button.setAttribute( 'class', 'btn-' + this_config.code );
			button.setAttribute( 'data-nw-code', this_config.code );
			overlay.append( button );
		}

		overlay.addEventListener( 'click', ( event ) => {
			const el = event.target;
			if ( el.nodeName !== 'BUTTON' ) {
				return;
			}
			event.preventDefault();
			console.log( el.getAttribute( 'data-nw-code' ) );
			console.log( target );
		} );

		target.append( overlay );
	}

	function addDocumentOverlays () {
		const targets = document.querySelectorAll( '.Post:not(.nw-has-overlay), .Comment:not(.nw-has-overlay)' );
		targets.forEach( addElementOverlay );
	}

	addDocumentOverlays();
	window.setInterval( addDocumentOverlays, 750 );

} )();
