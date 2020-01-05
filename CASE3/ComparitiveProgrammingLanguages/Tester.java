// Dynamic Dispatch
public class Tester {
    public int check;
    public Tester() {
        this.check = 1;
    }
    public Tester(int check) {
        this.check = check;
    }

    public static int adder() {
        return 3 + 1;
    }
    public static int adder(int x, int y) {
        return x + y;
    }
    
    public static void except(int x) {
        // try except
        try {
            int[] myList = {1,2,3};
            System.out.println(myList[10]);
        } catch (Exception e) {
            System.out.println("Something went wrong");
        } finally {
            System.out.println("Try catch complete");
        }
    }
    public static void main(String[] args) {
        Tester test = new Tester();
        System.out.println(test.check);
        Tester test1 = new Tester(6);
        System.out.println(test1.check);
        int x = test1.adder(1,4);
        int y = test1.adder();
        System.out.println(x);
        System.out.println(y);
        test1.except(x);
    }
}