// Given an array nums, return true if the array was originally sorted in n
// on-decreasing order, then rotated some number of positions (including zero).
// Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same
// length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

function check(nums: number[]): boolean {
	// Check that the elements of the array are in non-decreasing order.
	// If one element breaks this pattern, then use this as the maximum value.
	// The proceeding sub-array must also be in a non-decreasing order, but
	// cannot be larger than the maximum value, and also must be less than the
	// first element of the original array.
	let rotationPointFound = false;
	let maximumValue = nums[0];
	let prev = Number.NEGATIVE_INFINITY;

	for (const num of nums) {
		if (num < prev) {
			if (rotationPointFound) return false;
			else {
				rotationPointFound = true;
			}
		}
		if (rotationPointFound && num > maximumValue) {
			return false;
		}
		prev = num;
	}
	return true;
}

let nums = [3, 4, 5, 1, 2]; // true
// let nums = [1, 3, 2]; // false
console.log(check(nums));
