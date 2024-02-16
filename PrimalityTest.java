public class PrimalityTest {
    public static boolean isPrime(int n) {
        if (n == 0 || n == 1) {
            return false;
        } else {
            for (int i = 2; i < n; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        }
    }

    public static boolean isPrimeImproved(int n) {
        if (n == 0 || n == 1) {
            return false;
        } else {
            for (int i = 2; i <= Math.sqrt(n);) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(0));
        System.out.println(isPrime(1));
        System.out.println(isPrime(2));
        System.out.println(isPrime(3));
        System.out.println(isPrime(9));

        System.out.println("------------");

        System.out.println(isPrimeImproved(0));
        System.out.println(isPrimeImproved(1));
        System.out.println(isPrimeImproved(2));
        System.out.println(isPrimeImproved(3));
        System.out.println(isPrimeImproved(9));
    }
}
