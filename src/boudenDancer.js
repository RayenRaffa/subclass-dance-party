var makeBoudenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, 400, 450, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.append('<img class="bouden" src="img/bouden.jpeg" style="" />');
};
makeBoudenDancer.prototype = Object.create(makeDancer.prototype);
makeBoudenDancer.prototype.constructor = makeBoudenDancer;

makeBoudenDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

