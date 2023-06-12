// Creating the animal object
const animal = {
    move: function() {
      console.log("The animal is moving.");
    }
  };
  
  // Creating the cat object and inheriting from the animal object
  const cat = Object.create(animal);
  
  // Testing the move property of the animal and cat objects
  animal.move(); // Output: The animal is moving.
  cat.move();    // Output: The animal is moving.
  