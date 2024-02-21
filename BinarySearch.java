class BinarySearch {
    public static void findElement(int sortedArr[], int key) {
        int startIdx = 0;
        int endIdx = sortedArr.length - 1;

        while (startIdx <= endIdx) {
            int middleIdx = startIdx + (int) Math.floor(endIdx - startIdx) / 2;

            if (sortedArr[middleIdx] == key)
                System.out.println(middleIdx);

            if (sortedArr[middleIdx] < key)
                startIdx = middleIdx + 1;
            else
                endIdx = middleIdx - 1;
        }
    }

    public static void main(String[] args) {
        int sortedArr[] = { 10, 20, 30, 40, 50, 60, 70, 80, 90 };
        findElement(sortedArr, 70);
    }
}