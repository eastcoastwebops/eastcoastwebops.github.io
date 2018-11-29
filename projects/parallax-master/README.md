# jQuery mouse parallax plugin

**See the example**

[ Example ]( https://giuseppesalvo.github.io/jquery-mouse-parallax )

### How to use

**Requirements:**
- Download this repo and include "jquery-parallax.js in your project"
- Include TweenLite in your project [TweenLite](http://greensock.com/tweenlite)

**Code:**

Add this code on your js file
	
	$( document ).mousemove( function( e ) {
	
		$( 'ELEMENT'   ).parallax( resistance, e );
		$( 'ELEMENT-2' ).parallax( resistance, e );
	
		//resistance is a int/float
		// What is "e" ?  It's the mouse event called by document -> mousemove
	
	});

