// 128. Longest Consecutive Sequence

/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 

Constraints:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9

*/

function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    let sortedArr = [...new Set(nums)].sort(
        (a, b) => a - b
    );

    let longest = 1;
    let current = 1;

    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] == sortedArr[i - 1] + 1) {
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 1;
        }
    }

    return longest;
}

const nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));
