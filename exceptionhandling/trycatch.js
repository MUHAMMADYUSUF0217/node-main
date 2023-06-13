try {
    console.log(a); // ReferenceError: a is not defined
    let a = 3;
  } catch (error) {
    console.error("Error:", error.message); // Error: let must be declared before use
  }
  
  try {
    console.log(1 / 0); // Infinity
  } catch (error) {
    console.error("Error:", error.message); // Error: Cannot divide by zero
  }
  