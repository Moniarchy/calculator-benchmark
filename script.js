var handleEvents = function() {
  document.getElementById( 'calculator-body' )
  .addEventListener( 'click', function( e ) {
  if ( e.target && e.target.matches('div.calculator-cell')) {
    document.querySelector( '.calculator-answers').innerHTML = e.target.innerHTML
    }
  })
}
