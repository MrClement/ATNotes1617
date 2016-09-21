import java.util.NoSuchElementException;

public class Queue<E> {

    //instance data goes here (might be a little different than Stack)
    private int size;
    private Node<E> last;

    //Don't need to write this, but it useful for getting your bearings
    public Queue() {
        size = 0;
        last = null;
    }

    public boolean isEmpty() {
        return last == null;
    }

    //Returns the number of items in this stack.
    public int size() {
        return size;
    }

    //Adds the item to this queue.
    public void enqueue(E item) {
        if(last == null) {
            last = new Node<E>(item);
            last.setNext(last);
            size++;
        } else {
            Node<E> oldLast = last;
            last = new Node<E>(item, oldLast.getNext());
            oldLast.setNext(last);
            size++;
        }
    }

    //Removes and returns the item least recently added to this queue.
    // - Make sure to acoount for an empty queue
    public E dequeue() {
        if(size>0) {
            Node<E> first = last.getNext();
            last.setNext(first.getNext());
            size--;
            return first.getItem();
        } else {
            throw new NoSuchElementException("Boo");
        }
    }

    //Returns (but does not remove) the item least recently added to this queue.
    // - Make sure to acoount for an empty queue
    public E peek() {
        return null;
    }

}