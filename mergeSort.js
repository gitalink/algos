
// sort array using merge sort algorithm
// merging of arrays takes O(nlogn) time,  O(n) space

function mergeSort(arr) {
	if (arr.length === 1 || arr.length === 0) {
		return arr
	}
	mergeSortHelper(arr, 0, arr.length-1)
	return arr
}

function mergeSortHelper(arr, start, end) {
	if (start >= end) return

	let middle = Math.floor((start + (end-start)/2))
	mergeSortHelper(arr, start, middle)
	mergeSortHelper(arr, middle+1, end)
	merge(arr, start, middle, end)
}


function merge(arr, start, middle, end) {
	const result = new Array(end-start+1)
	let pointer1 = start
	let pointer2 = middle+1
	let sortedIndex = 0

	while (pointer1 <= middle && pointer2 <= end) {
		if (arr[pointer1] <= arr[pointer2]) {
			result[sortedIndex++] = arr[pointer1++]
		}
		else {
			result[sortedIndex++] = arr[pointer2++]
		}
	}
	while (pointer1 <= middle){
		result[sortedIndex++] = arr[pointer1++]

	}
	while (pointer2 <= end) {
		result[sortedIndex++] = arr[pointer2++]
	}
	// flush sorted elements back into the original array
	for (let i = 0; i < result.length; i++) {
		arr[start+i] = result[i]
	}
}

console.log(mergeSort([10, 9, 7, 3, 4, 9, 12, 12, 1, 0, -1]))

