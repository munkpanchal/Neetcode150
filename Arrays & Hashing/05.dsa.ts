/* 

347. Top K Frequent Elements


Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


 */

function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();

    for (const val of nums) {
        map.set(val, (map.get(val) || 0)! + 1);
    }

    const newArr = Array.from(map);
    newArr.sort((a, b) => b[1] - a[1]);

    let newForm: number[] = [];

    let idx = 0;
    for (let val of newArr) {
        if (idx < k) {
            newForm.push(val[0]);
            idx++;
        } else {
            break;
        }
    }
    return newForm;
}

// const arr = [1, 1, 1, 2, 2, 3],
//     k = 2;
const arr = [3, 0, 1, 0],
    k = 1;

console.log(topKFrequent(arr, k));
