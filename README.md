## Stack and Queue Notes

Stack is a LIFO (last in, first out) data structure with the following methods:

```java

void push(E element)    //add an element
E pop()                 //remove and return the top element
boolean isEmpty()   
int size()

//not required, but common
E peek()                //look at the top element without removing

```

Queue is a FIFO (last in, first out) data structure with the following methods:

```java

void enqueue(E element)    //add an element
E dequeue()                //remove and return the least recent element
boolean isEmpty()   
int size()

//not required, but common
E peek()                //look at the least recent element without removing

```

If Stack and Queue are properly implemented using linked lists we can ensure the following performance for all operations:

| Operation | Stack | Queue | Array |
| --- | --- | --- | --- |
| Insertion | `O(1)` | `O(1)` | `O(n)` |
| Deletion | `O(1)` | `O(1)` | `O(n)` |
| Access | `O(n)` | `O(n)` | `O(1)` |
| Search | `O(n)` | `O(n)` | `O(n)` |

All code from class is also in this repo. 
