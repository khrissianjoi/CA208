// Dynamic Dispatch
public class Tester {
    public int check;
    public Tester() {
        this.check = 1;
    }
    public Tester(int check) {
        this.check = check;
    }
    public static void main(String[] args) {
        Tester test = new Tester();
        System.out.println(test.check);
        Tester test1 = new Tester(6);
        System.out.println(test1.check);
    }
}