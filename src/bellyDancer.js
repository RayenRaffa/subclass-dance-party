var makeBellyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.prepend('<img class="nermine" src="img/nermine.jpg" />');
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
makeBellyDancer.prototype = Object.create(makeDancer.prototype);
makeBellyDancer.prototype.constructor = makeBellyDancer;

makeBellyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

