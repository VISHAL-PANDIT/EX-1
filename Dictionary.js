//Using literal notation
let dictionary = {};
dictionary["key1"] = "value1";
dictionary["key2"] = "value2";
console.log(dictionary);

//Using constructor
let dictionary = new Object();
dictionary["key1"] = "value1";
dictionary["key2"] = "value2";
console.log(dictionary);

//Using ES6 method
let dictionary = new Map();
dictionary.set("key1", "value1");
dictionary.set("key2", "value2");
console.log(dictionary);

// Using Object.assign()
let dictionary = {};
Object
    .assign(dictionary, { "key1": "value1", "key2": "value2" });
console.log(dictionary);

// Using Spread Operator
let dictionary = {};
dictionary = { ...dictionary, "key1": "value1", "key2": "value2" };
console.log(dictionary);

// Using bracket notation
let dictionary = {};
let key = "key1";
let value = "value1";
dictionary[key] = value;
console.log(dictionary);

// Using dot notation
let dictionary = {};
dictionary.key1 = "value1";
dictionary.key2 = "value2";
console.log(dictionary);