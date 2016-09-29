/**
 * Created by aclement on 9/26/16.
 */
public class BinarySearchTree<Key extends Comparable<Key>, Value> {

    private Node<Key, Value> root;

    public BinarySearchTree() {
        root = null;
    }

    public int size() {
        return size(root);
    }

    private int size(Node x) {
        if(x == null) {
            return 0;
        } else {
            return x.getSize();
        }
    }

    public boolean isEmpty() {
        return size() == 0;
    }

    public void put(Key key, Value value) {
        root = put(root, key, value);
    }

    private Node<Key,Value> put(Node<Key, Value> n, Key key, Value val) {
        if(n == null)  {
            return new Node<Key, Value>(key, val, 1);
        }
        int i = key.compareTo(n.getKey());
        if(i < 0) {
            n.setLeft(put(n.getLeft(), key, val));
        } else if( i > 0) {
            n.setRight(put(n.getRight(), key, val));
        } else {

        }
        n.setSize(1 + size(n.getLeft()) + size(n.getRight()));
        return n;
    }
}
