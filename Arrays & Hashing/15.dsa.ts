// 42. Trapping Rain Water
/* 

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 
*/

function trap(height: number[]): number {
    // if (height.length === 0) return 0;
    // let totalWater = 0;
    // for (let i = 1; i < height.length; i++) {
    //     let leftMax = 0;
    //     for (let j = 0; j < i; j++) {
    //         leftMax = Math.max(height[j], leftMax);
    //     }
    //     let rightMax = 0;
    //     for (let j = i + 1; j < height.length; j++) {
    //         rightMax = Math.max(height[j], rightMax);
    //     }
    //     const waterAtPosition =
    //         Math.min(leftMax, rightMax) - height[i];
    //     if (waterAtPosition > 0) {
    //         totalWater += waterAtPosition;
    //     }
    // }
    // return totalWater;

    const leftAux: number[] = Array.from(
        {
            length: height.length,
        },
        (v, _i) => 0
    );
    const rightAux: number[] = Array.from(
        {
            length: height.length,
        },
        (v, _i) => 0
    );

    let leftMax = height[0],
        rightMax = height[height.length - 1];

    for (let i = 0; i < height.length; i++) {
        let val = height[i];
        leftMax = Math.max(val, leftMax);
        leftAux[i] = leftMax;
    }
    for (let i = height.length - 1; i >= 0; i--) {
        let val = height[i];
        rightMax = Math.max(val, rightMax);
        rightAux[i] = rightMax;
    }

    let maxVol = 0;
    for (let i = 0; i < height.length; i++) {
        let currentVol =
            Math.min(leftAux[i], rightAux[i]) - height[i];

        if (currentVol > 0) {
            maxVol += currentVol;
        }
    }
    return maxVol;
}

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
