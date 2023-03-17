function sumOfDifferences(arr) {
    if (arr.length === 0 || arr.length === 0)
        return 0;
    var point1 = 0;
    var point2 = 1;
    var sum = 0;
    while (point2 < arr.length) {
        var add = arr[point1] - arr[point2];
        sum += add;
        point1++;
        point2++;
    }
    return sum;
}
console.log(sumOfDifferences([2, 1, 10]));
