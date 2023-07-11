// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
/**
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
 * In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.
 */

const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); // Greetings from Madrid

  console.log(myObject);
  //print(myObject);

  myObject.toString();

  // null prototype, meaning is the end of chain of protos
console.log(Object.getPrototypeOf(myObject)); // Object { }

const myDate = new Date();
let object = myDate;
console.log('do');
do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

const newmyDate = new Date(1995, 11, 17);

console.log(newmyDate.getYear()); // 95

newmyDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear();
newmyDate.getYear(); // 'something else!', overloading