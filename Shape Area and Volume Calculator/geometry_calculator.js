function calculate() {
    
    let radius = parseFloat(document.getElementById('radius').value);
    let height = parseFloat(document.getElementById('height').value);
  
    // Verify the inputs
    if (isNaN(radius) || radius <= 0) {
      alert("Please enter a valid radius greater than zero.");
      return;
    }
  
    if (isNaN(height) || height <= 0) {
      alert("Please enter a valid height greater than zero.");
      return;
    }
  
    
    let perimeter = 2 * Math.PI * radius;  // Perimeter of the circle
    let area = Math.PI * Math.pow(radius, 2);  // Area of the circle
    let volume = Math.PI * Math.pow(radius, 2) * height;  // Volume of the cylinder
  
    // Display results
    document.getElementById('perimeterResult').textContent = "The perimeter (circumference) of the circle is: " + perimeter + " units.";
    document.getElementById('areaResult').textContent = "The area of the circle is: " + area + " square units.";
    document.getElementById('volumeResult').textContent = "The volume of the cylinder is: " + volume + " cubic units.";
  }
  