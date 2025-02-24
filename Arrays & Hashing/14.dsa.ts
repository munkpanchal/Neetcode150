// Brute force
function maxArea(height: number[]): number {
    let water = 0;
    let maxWater = Math.min(height[1], height[0]) * (1 - 0);

    for (let i = 0; i < height.length; i++) {
        for (let j = i; j < height.length; j++) {
            water =
                Math.min(height[i], height[j]) * (j - i);

            maxWater = Math.max(water, maxWater);
        }
    }

    return maxWater;
}

function maxAreaOptimised(height: number[]): number {
    let left = 0,
        right = height.length - 1;
    let maxVolume = 0;

    while (left < right) {
        let width = right - left;
        let currentHeight = Math.min(
            height[left],
            height[right]
        );
        let currentVolume = width * currentHeight;
        maxVolume = Math.max(currentVolume, maxVolume);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVolume;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxAreaOptimised(height));
