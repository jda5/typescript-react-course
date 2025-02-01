// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly
// one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
	const numsMap = new Map<number, number>();
	let diff: number;

	for (let i = 0; i < nums.length; i++) {
		diff = target - nums[i];
		if (numsMap.has(diff)) {
			return [i, numsMap.get(diff)!];
		}
		numsMap.set(nums[i], i);
	}
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // [0, 1]
