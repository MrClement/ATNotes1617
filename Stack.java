import java.util.EmptyStackException;

/**
 * Created by aclement on 9/1/16.
 */
public class Stack<E> {


    private Node<E> first;
    private int size;

    //Don't need to write this, but it is a nice illustration of the base state
    public Stack() {
        first = null;
        size = 0;
    }

    public boolean isEmpty() {
        return first == null;
    }

    public int size() {
        return size;
    }

    public void push(E item) {
        Node<E> oldFirst = first;
        Node<E> newFirst = new Node<E>(item, oldFirst);
        first = newFirst;
        size++;
    }

    public E peek() {
        if(isEmpty()) {
            throw new EmptyStackException();
        }
        return first.getItem();
    }
    public E pop() {
        if(isEmpty()) {
            throw new EmptyStackException();
        }
        E value = first.getItem();
        first = first.getNext();
        size--;
        return value;
    }




}
