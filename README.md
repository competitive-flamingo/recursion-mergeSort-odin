# JavaScript Algorithms: Merge Sort and Fibonacci Sequence

This repository contains two JavaScript files that demonstrate the implementation of the Merge Sort algorithm and the generation of the Fibonacci sequence using both iterative and recursive approaches.

## Files

### 1. `mergeSort.js`

This file contains the implementation of the Merge Sort algorithm, which is a divide-and-conquer sorting algorithm. The algorithm works by recursively splitting the array into smaller subarrays until each subarray contains a single element, and then merging these subarrays in a sorted manner.

#### Functions:
- **`mergeSort(arr, s = 0, e = arr.length - 1)`**: 
  - Sorts the array `arr` from index `s` to index `e`.
  - If the subarray has one or zero elements, it is already sorted.
  - Otherwise, it recursively sorts the left and right halves and then merges them.
  
- **`merge(arr, s, mid, e)`**: 
  - Merges two sorted subarrays of `arr` from `s` to `mid` and from `mid + 1` to `e`.
  - Uses two temporary arrays `L` and `R` to hold the left and right subarrays.
  - Merges the elements back into the original array in sorted order.

### 2. `recursion.js`

This file contains two functions to generate the Fibonacci sequence: one using an iterative approach and the other using a recursive approach.

#### Functions:
- **`fibs(n)`**: 
  - Generates the first `n` numbers in the Fibonacci sequence using an iterative approach.
  - Returns an array containing the sequence.

- **`fibsRec(n, arr = [0, 1])`**: 
  - Generates the first `n` numbers in the Fibonacci sequence using a recursive approach.
  - Takes an optional array `arr` to store the sequence and builds it recursively.