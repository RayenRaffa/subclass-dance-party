$(document).ready(function() {
  window.dancers = [];
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  // Playing music on page load 
  $("<audio></audio>").attr({
    'src':'music/la_fiesta.mp3'
  }).appendTo("body");
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    
    var top = getRandomArbitrary(400,500);
    var minLeft = 330 + (top - 400) * 4;
    var maxLeft =  1200 - (top - 400) * 2;
    var left = getRandomArbitrary(minLeft, maxLeft);
    // make a dancer with a random position
    var dancer =  new dancerMakerFunction(top, left, Math.random() * 1000);
    $('body').append(dancer.$node);
  });
});

