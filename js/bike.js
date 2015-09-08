function Bike(name,type,color){
  // attributes go here...
  this.name = name;
  this.bikeType = type;
  this.frameColor = color;
  this.distance_ridden = 0;
  this.condition = "ready to go!";
  this.WHEELS = 2;
}

Bike.prototype.takeForARide = function(distance){
  // code goes here...
  this.distance_ridden += distance
  if (this.distance_ridden > 50) {
    this.condition = "needs a tune up"
  };
};

Bike.prototype.tuneUp = function(){
  // code goes here...
  this.distance_ridden = 0;
};
