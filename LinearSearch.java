class LinearSearch {
    public static void findElement(int arr[], int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key)
                System.out.println(i);
        }
    }

    public static void main(String[] args) {
        int arr[] = { 10, 23, 14, 56, 87, 91 };
        findElement(arr, 87);
    }
}