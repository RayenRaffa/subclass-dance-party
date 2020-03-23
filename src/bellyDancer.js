var nermineCounter = 0;

var makeBellyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  // adding dynamic size to give the illusion of depth
  this.relativeSize = Math.floor(0.4 * top - 110);
  this.$node.prepend('<img class="nermine" src="img/nermine.png" style="height: '
                        + this.relativeSize +'%; width: ' + this.relativeSize + '%;" />');
  nermineCounter++;
  if(nermineCounter === 10) {
    $('body').find('#fiestaButton').toggle(250);
  }
  // $('audio')[0].play();

};
makeBellyDancer.prototype = Object.create(makeDancer.prototype);
makeBellyDancer.prototype.constructor = makeBellyDancer;

makeBellyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  if(this.$node.find('.nermine').hasClass('mirror')) {
    this.$node.find('.nermine').removeClass('mirror');
  } else {
    this.$node.find('.nermine').addClass('mirror');
  }
};

