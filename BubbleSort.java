import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int arr[]) {
        for (int outer = 0; outer < arr.length; outer++) {
            int outerEl = arr[outer];

            for (int inner = outer + 1; inner < arr.length; inner++) {
                int innerEl = arr[inner];

                if (outerEl > innerEl) {
                    arr[outer] = innerEl;
                    arr[inner] = outerEl;

                    outerEl = arr[outer];
                    innerEl = arr[inner];
                }
            }
        }

        System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args) {
        int arr[] = { 4, 1, 3, 6, 2, 9, 7, 10, 8 };

        bubbleSort(arr);
    }
}

// public class Main {
// public static void bubbleSort(int arr[]) {
// int resultArr[] = new int[arr.length];

// System.out.println(Arrays.toString(arr));

// for (int outer = 0; outer < arr.length; outer++) {
// int outerEl = arr[outer];

// for (int inner = 0; inner < resultArr.length; inner++) {
// int innerEl = arr[inner];

// if (outerEl > innerEl) {
// arr[outer] = innerEl;
// arr[inner] = outerEl;

// outerEl = arr[outer];
// innerEl = arr[inner];

// }
// }
// }

// System.out.println(Arrays.toString(arr));
// // return resultArr;
// }

// public static void main(String[] args) {
// int arr[] = { 4, 1, 3, 6, 2, 9, 7, 10, 8 };

// bubbleSort(arr);
// }
// }
