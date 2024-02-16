class IsPowerOfTwo {
    public static boolean isPowerOfTwo(int n) {
        if (n < 1)
            return false;

        int divNum = n;

        while (divNum > 1) {
            if (divNum % 2 == 1)
                return false;

            divNum = divNum / 2;
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPowerOfTwo(16));
        System.out.println(isPowerOfTwo(12));
        System.out.println(isPowerOfTwo(5));
        System.out.println(isPowerOfTwo(64));
    }
}