// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have. Each character in stones is a type
// of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
function numJewelsInStones(jewels, stones) {
    var jewelSet = new Set(jewels);
    var count = 0;
    for (var _i = 0, stones_1 = stones; _i < stones_1.length; _i++) {
        var stone = stones_1[_i];
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count;
}
var jewels = "aA";
var stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
