import java.util.ArrayList;

class FibonacciSequence {
    public static int fib(int n) {
        // int nums[] = { 1, 1 }; // Doesn't work

        // for (int i = 2; i < n + 1; i++) {
        // nums[i + 1] = nums[i - 2] + nums[i - 1];
        // }

        // System.out.println(Arrays.toString(nums));

        // return nums[n];

        ArrayList<Integer> nums = new ArrayList<>();
        nums.add(1);
        nums.add(1);

        for (int i = 2; i < n + 1; i++) {
            nums.add(nums.get(i - 2) + nums.get(i - 1));
        }

        System.out.println(nums);
        return nums.get(n);
    }

    public static void main(String[] args) {
        System.out.println(fib(4));
        System.out.println(fib(5));
    }
}