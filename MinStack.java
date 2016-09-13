import java.util.EmptyStackException;

/**
 * Created by aclement on 9/9/16.
 */
public class MinStack {

    Stack<Comparable> main;
    Stack<Comparable> minStack;


    public MinStack() {
        main = new Stack<Comparable>();
        minStack = new Stack<Comparable>();

    }

    public boolean isEmpty() {
        return main.isEmpty();
    }

    public int size() {
        return main.size();
    }

    public void push(Comparable item) {
        if( minStack.size() == 0 || minStack.peek().compareTo(item) >=0 ) {
            minStack.push(item);
        }
        main.push(item);
    }

    public Comparable peek() {
        if(isEmpty()) {
            throw new EmptyStackException();
        }
        return main.peek();
    }
    public Comparable pop() {
        if(isEmpty()) {
            throw new EmptyStackException();
        }
        if(main.peek().compareTo(minStack.peek()) == 0) {
            minStack.pop();
        }
        return main.pop();
    }

    public Comparable min() {
        if(isEmpty()) {
            throw new EmptyStackException();
        }
        return minStack.peek();
    }


}
