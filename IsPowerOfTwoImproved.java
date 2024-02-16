public class IsPowerOfTwoImproved {
    public static boolean isPowerOfTwo(int n) {
        if (n < 1)
            return false;

        return (n & (n - 1)) == 0;
    }

    public static void main(String[] args) {
        System.out.println(isPowerOfTwo(16));
        System.out.println(isPowerOfTwo(12));
        System.out.println(isPowerOfTwo(5));
        System.out.println(isPowerOfTwo(64));
    }
}
