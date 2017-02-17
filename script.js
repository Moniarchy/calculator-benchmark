var handleEvents = function() {
  document.getElementById( 'calculator-body' )
  .addEventListener( 'click', function( e ) {
  if ( e.target && e.target.matches('div.calculator-cell')) {
    console.log('div.calculator-answers'.innerHTML)
    console.log(e.target.innerHTML)
    }
  })
}


//when you come back to this, you were figuring out how to get the innerHTML of the answer field
//so you could update it
