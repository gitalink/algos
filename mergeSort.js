function mergeArrays(arr1, arr2) {
	const sortedArr = []
	let pointer1 = 0
	let pointer2 = 0

	while (pointer1 < arr1.length && pointer2 < arr2.length) {
		if (arr1[pointer1] <= arr2[pointer2]) {
			sortedArr.push(arr1[pointer1])
			pointer1 += 1
		}
		else {
			sortedArr.push(arr2[pointer1])
			pointer2 +=1
		}
	}
		while (pointer1 < arr1.length) {
		sortedArr.push(arr1[pointer1])
		pointer1 +=1
	}

	while (pointer2 < arr2.length) {
		sortedArr.push(arr2[pointer2])
		pointer2 +=1
	}
	return sortedArr
