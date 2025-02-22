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

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
