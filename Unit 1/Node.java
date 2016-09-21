/**
 * Created by Alex Clement on 8/29/2016.
 */
public class Node<E> {

    private E item;
    private Node<E> next;

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

    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Node<?> node = (Node<?>) o;

        if (item != null ? !item.equals(node.item) : node.item != null) return false;
        return next != null ? next.equals(node.next) : node.next == null;

    }

    @Override
    public int hashCode() {
        int result = item != null ? item.hashCode() : 0;
        result = 31 * result + (next != null ? next.hashCode() : 0);
        return result;
    }
}
