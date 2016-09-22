## Unit 2

### Dictionaries (or [Maps](https://docs.oracle.com/javase/7/docs/api/java/util/Map.html))

Dictionaries are data structures that order data into key-value pairs. There can only be a single occurrence of a key, but we can repeat values. Here are the methods we would expect a dictionary to provide:

```java
/*  A Java dictionary should use generics for the
 *  types of both key and value. E and T here.
 */

//add an key-value pair to the dictionary
void put(E key, T value)

//get the value associated with a given key
T get(E key)

//remove a key-value pair and return its value
T remove(E key)

//returns true if the given key has an associated value
boolean contains(E key)

//returns true if the dictionary is empty
boolean isEmpty()

//returns the number of key-value pairs in the dictionary
int size()

//returns a Collection¹ of key-value pairs
Collection<E> keys()

```
1. [Collection](https://docs.oracle.com/javase/7/docs/api/java/util/Collection.html)

Dictionaries are common features in modern programming languages. Unordered key-value mappings show up in Python:

```python
dictionary = {}

dictionary["name"] = "Bob Smith"
#            ^key       ^value

```

And in JavaScript:
```javascript
var object = {} //JavaScript's key-value stores are called objects

object["name"] = "Bob Smith"
//       ^key       ^value

```

#### Task 1

Implement a Dictionary using array(s).
