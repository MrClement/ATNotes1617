import java.util.HashMap;

/**
 * Created by aclement on 10/5/16.
 */
public class HashDemo {

    private String s;
    private int x;
    private Node<String, String> n;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        HashDemo hashDemo = (HashDemo) o;

        if (x != hashDemo.x) return false;
        return s.equals(hashDemo.s);

    }

    @Override
    public int hashCode() {
        int result = s.hashCode();
        result = 31 * result + x;
        return result;
    }


    public static int hash(int x) {
            return (x & 0x7fffffff) % 10;
        }


    public static void main(String[] args) {

        System.out.println("Mr. Clement is the worst!".hashCode());



    }
}
