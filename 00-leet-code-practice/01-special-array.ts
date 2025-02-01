// An array is considered special if every pair of its adjacent elements
// contains two numbers with different parity.

// You are given an array of integers nums. Return true if nums is a
// special array, otherwise, return false.

// Function to check if a number is even
const isEven = (num: number) => num % 2 == 0;

function isArraySpecial(nums: number[]): boolean {
	if (nums.length < 2) return true;

	for (let i = 1; i < nums.length; i++) {
		if (isEven(nums[i]) === isEven(nums[i - 1])) {
			return false;
		}
	}
	return true;
}
