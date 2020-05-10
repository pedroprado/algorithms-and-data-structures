var http = require('http');

const linearSearch = require('./algorithms/search/linear_search');
const binarySearch = require('./algorithms/search/binary_seach');
const naiveStringSearch = require('./algorithms/search/naive_string_search');

const bubbleSort = require('./algorithms/sort/elementary/bubble_sort');
const selectionSort = require('./algorithms/sort/elementary/selection_sort');
const insertionSort = require('./algorithms/sort/elementary/insertion_sort');
const mergeSort = require('./algorithms/sort/complex/merge_sort');
const quickSort = require('./algorithms/sort/complex/quick_sort');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080, () => {
   search();
});

const search = () => {
    const arr = [1,2,3,4,5,6,19,25, 72, 85,];
    //console.log(linearSearch.linear_search(arr, 10));

    //console.log(binarySearch.binary_search(arr, 30));

    const long = "lorie loled";
    const short = "loaa";

    console.log(naiveStringSearch.naive_string_search(long, short));
};

const sort = () => {
    // const array = bubbleSort.bubble_sort1([5, 4, 3, 2, 1]);
    // console.log(array)

    // const arr = [0,9,5,2,1,3];
    // const sorted = selectionSort.selection_sort(arr);
    // console.log(sorted);

    // const arr = [0,9,5,2,1,3];
    // const sorted = insertionSort.insertion_sort(arr);
    // console.log(sorted);

    // const arr1 =[1,10,50];
    // const arr2 = [2, 14, 49, 100];
    // const arraySorted = mergeSort.mergeTwoSortedArray(arr2, arr1);
    // const arr3 = [10, 24, 76, 73];
    // const mergeSorted = mergeSort.merge_sort(arr3)
    // console.log(mergeSorted);


    // const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];
    // const arr2 = [26,23, 27, 44, 17, 47, 39, 42, 43, 1];
    // const arr3 = [4, 8, 2, 100, -3, 1, 5, 7, 6, 3]
    // console.log(quickSort.quick_sort(arr3));
};