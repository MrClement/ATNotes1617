/**
 * Created by aclement on 8/30/16.
 */
public class Node<E> {

    private E item;
    private Node next;

    public Node(E item, Node next) {
        this.item = item;
        this.next = next;
    }

    public Node(E item) {
        this.item = item;
        this.next = null;
    }


    public E getItem() {
        return item;
    }

    public void setItem(E item) {
        this.item = item;
    }

    public Node<E> getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }
}
