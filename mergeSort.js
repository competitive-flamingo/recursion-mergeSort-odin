const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

function mergeSort(arr, s = 0, e = arr.length - 1) {
    if(e - s + 1 <= 1) return arr;
    let mid = Math.floor((s + e) / 2);
    mergeSort(arr, s, mid);
    mergeSort(arr, mid + 1, e);
    merge(arr, s, mid, e);
    return arr;
}

function merge(arr, s, mid, e) {
    const length1 = mid - s + 1;
    const length2 = e - mid;

    const L = new Array(length1);
    const R = new Array(length2);

    for(let i = 0 ; i < length1 ; i++) {
        L[i] = arr[s + i];
    }

    for(let i = 0 ; i < length2 ; i++) {
        R[i] = arr[mid + 1 + i];
    }

    let i = 0, j = 0, k = s;
    while(i < length1 && j < length2) {
        if(L[i] <= R[j]) {
            arr[k] = L[i++];
        }
        else {
            arr[k] = R[j++];
        }
        k++;
    }

    while(i < length1) {
        arr[k++] = L[i++];
    }
    
    while(j < length2) {
        arr[k++] = R[j++];
    }
}

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));