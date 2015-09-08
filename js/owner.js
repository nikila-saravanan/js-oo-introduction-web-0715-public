function Owner(name){
  // attributes go here...
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name,type,color){
  // code goes here...
  bike = new Bike(name,type,color);
  this.bikes.push(bike);
};

Owner.prototype.rideBike = function(bike,distance){
  // code goes here...
  for (var i = 0; i < this.bikes.length; i++) {
	   if (this.bikes[i].name == bike) {
       this.bikes[i].takeForARide(distance);}
  }

};
