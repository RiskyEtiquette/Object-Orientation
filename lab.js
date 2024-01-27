//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

//Code here
const me = {
  name: "Kaden",
  age: "28",
};

//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).

//Code here
const dog = {
  name: "Koko",
  color: "brown",
  age: 3,
  goodBoy: true,
};

//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

//Code here
console.log(dog.name);

//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

//Code here
console.log(dog["color"]);

//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here
const favoriteThings = {
  band: "Red Hot Chili Peppers",
  food: "Italian",
  person: "Donnie",
  book: "Pendragon",
  movie: "Lord Of the Rings",
  holiday: "Christmas",
};

/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
*/

//Code hefavoriteThings.car = "Tesla Model S";
favoriteThings.car = "Tesla Model S";
favoriteThings["show"] = "Breaking Bad";

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'. (If they were either of those things already, change them to something else.)
*/

//Code here
favoriteThings.food = "Chicken Nuggets";
favoriteThings["book"] = "Harry Potter";

console.log(favoriteThings.food);

//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
var carDetails = {
  color: "red",
  make: "toyota",
  model: "tacoma",
  year: 1994,
};
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here
const { color, make, model, year } = carDetails;
console.log(color);

//////////////////////////// PROBLEM 7 ////////////////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting(obj) {
  //Code Here
  const { firstName, lastName, title } = obj;

  // Do not edit the code below.
  return "Hello, " + title + " " + firstName + " " + lastName + "!";
  // Do not edit the code above.
}

//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
function totalPopulation({ utah, california, texas, arizona }) {
  return utah + california + texas + arizona;
}
const population = {
  utah: 3205958,
  california: 39538223,
  texas: 29145505,
  arizona: 7278717,
};

console.log(totalPopulation(population)); // 79128403

//////////////////////////// PROBLEM 9 ////////////////////////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here
function ingredients(obj) {
  const { carb, fat, protein } = obj;
  const arr = [carb, fat, protein];
  return arr;
}
const nutrionInfo = {
  carb: "40g",
  fat: "20g",
  protein: "50g",
};
console.log(ingredients(nutrionInfo));

//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = {
  name: "Bryan",
  age: 24,
  pwHash: "U+Ldlngx2BYQk",
  email: "BryanSmith33@gmail.com",
  birthday: "05/02/1990",
  username: "bryansmith33",
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

//Code Here
const newUser = {
  ...user,
  name: "Bryan G. Smith",
  email: "bryan.smith@devmountain.in",
};

//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

//Code Here
delete newUser.age;
console.log(newUser);

//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

//Code here
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

// Create an instance of the Cat class
const myCat = new Cat("Whiskers", 3, "Tabby");

// Print the name of the cat instance using dot notation
console.log(myCat.name); // Output: Whiskers

//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

//Code here
class Wizard {
  constructor(name, age, favoriteSpell) {
    this.name = name;
    this.age = age;
    this.favoriteSpell = favoriteSpell;
  }

  castSpell() {
    console.log(`${this.name} has cast ${this.favoriteSpell}`);
  }
}

// Create an instance of the Wizard class
const myWizard = new Wizard("Merlin", 500, "Fireball");

// Call the castSpell function on the instance of the wizard
myWizard.castSpell(); // Output: Merlin has cast Fireball

//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

//Code Here
class Phone {
  constructor(brand, model, storage, color, price) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
    this.sold = false; // Initially set to false as the phone is in inventory
  }

  sell() {
    this.sold = true;
    console.log(`${this.brand} ${this.model} has been sold.`);
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

// Example usage:
const myPhone = new Phone("Apple", "iPhone 13", "256GB", "Black", 999);
console.log(myPhone); // Display the initial phone object

myPhone.sell(); // Simulate selling the phone
console.log(myPhone);

/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

//Code Here
// Create three phone instances
const phone1 = new Phone("Samsung", "Galaxy S21", 128, "Phantom Black", 799);
const phone2 = new Phone("Apple", "iPhone 12", 256, "Pacific Blue", 899);
const phone3 = new Phone("Google", "Pixel 6", 128, "Stormy Black", 699);

console.log(phone1);
console.log(phone2);
console.log(phone3);

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/

//Code Here
// Change the price of phone1
phone1.changePrice(749);

// Log the phone1 object to see the price change
console.log(phone1);

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

//Code Here
// Call the sell method on phone2
phone2.sell();

// Print the value of phone2's sold property
console.log(phone2.sold); // Output should be true if the sell method worked correctly

//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: "red",
  highlight: "blue",
  text: "yellow",
};
//do not edit this object

//Code Here
// Using the spread operator to create a copy of the colors object
const colorsCopy = { ...colors };

// Printing the copied object to verify
console.log(colorsCopy);

/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: "Helen",
  lastName: "Parr",
  phoneNumber: 1234445555,
  email: "helen@mymail.com",
};

const shippingInfo = {
  firstName: "Helen",
  lastName: "Parr",
  street: "100 E. Main Street",
  city: "Anytown",
  state: "AZ",
  zipCode: 85004,
};
//do not edit the objects above

//Code Here
// Using the spread operator to combine the two objects
const helensInfo = { ...contactInfo, ...shippingInfo };

// Printing the combined object to verify
console.log(helensInfo);

//Print helensInfo to see what it looks like, there should be no repeating properties.

//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

//Code Here
class Vehicle {
  constructor(capacity, color, mileage) {
    this.capacity = capacity;
    this.color = color;
    this.mileage = mileage;
  }

  move(miles) {
    this.mileage += miles;
    console.log(`The mileage is now ${this.mileage} miles.`);
  }
}

// Example usage:
const myCar = new Vehicle(5, 'blue', 15000);
myCar.move(100); // Output: The mileage is now 15100 miles.

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

//Code Here
const myFirstVehicle = new Vehicle(4, 'silver', 5000);
/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

//Code Here
class Motorcycle extends Vehicle {
  constructor(capacity, color, mileage, make, isCool){
    super(capacity, color, mileage);
    this.make = make
    this.isCool = isCool
  }
}
const myMotorcycle = new Motorcycle(1, 'black', 1000, 'Hayabusa', true)
console.log(myMotorcycle)
/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

//Code Here
const myFirstMotorcycle = new Motorcycle(1, 'red', 500, 'Honda', true);
console.log(myFirstMotorcycle)
/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(50);
/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

//Code Here
class Boat extends Vehicle {
  constructor(capacity, color, mileage, name, type, isSeaworthy){
super(capacity, color, mileage)
this.name = name
this.type = type 
this.isSeaworthy = isSeaworthy
  }
  checkSeaworthiness() {
    if(this.isSeaworthy){
      console.log(`the ${this.color} ${this.type} ${this.name} is seaworthy!`)
    }else{
    console.log(`You need to get your ${this.type} in shape!`)
  }
}
performMaintenance(){
  this.isSeaworthy = true
  console.log(`Maintenance completed. ${this.type} ${this.name} is now seaworthy!`)
}}
const myBoat = new Boat(10, 'white', 200, 'Mayflower', 'yacht', false)
myBoat.checkSeaworthiness()
myBoat.performMaintenance()
myBoat.checkSeaworthiness()

/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

//Code Here
const myFirstBoat = new Boat(8, 'blue', 150, 'WaveRunner', 'speed boat', false);
console.log(myFirstBoat)
/*
  Call the checkSeaworthiness method on your new boat
*/

//Code Here
myFirstBoat.checkSeaworthiness()

/*
  Now run the performMaintenance method on your boat
*/

//Code Here
myFirstBoat.performMaintenance()
/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//Code Here
myFirstBoat.checkSeaworthiness()