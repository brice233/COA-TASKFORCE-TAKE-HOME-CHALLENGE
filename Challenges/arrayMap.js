function hasSubarrayWithSum(arr, target) {
    // Constants for constraints
    const MIN_VAL = -1000000000;
    const MAX_VAL = 1000000000;

    // Check if the target is within the allowed range
    if (target < MIN_VAL || target > MAX_VAL) {
        throw new Error("Target sum is out of valid range.");
    }

    // Check if all elements in the array are within the allowed range
    for (let num of arr) {
        if (num < MIN_VAL || num > MAX_VAL) {
            throw new Error("Array element out of valid range.");
        }
    }

    // Initialize an empty map to store cumulative sums
    const cumulativeSumMap = new Map();
    // Add the initial cumulative sum of 0
    cumulativeSumMap.set(0, 1);
    
    // Variable to keep track of the cumulative sum
    let cumulativeSum = 0;

    for (let num of arr) {
        // Update the cumulative sum
        cumulativeSum += num;
        
        // Check if there is a subarray that sums to the target
        if (cumulativeSumMap.has(cumulativeSum - target)) {
            return true;
        }
        
        // Update the map with the current cumulative sum
        cumulativeSumMap.set(cumulativeSum, (cumulativeSumMap.get(cumulativeSum) || 0) + 1);
    }
    
    // If no subarray is found, return false
    return false;
}

// Example usage
try {
    const arr = [4, 2, 7, 1, 9, 5];
    const target = 17;
    console.log(hasSubarrayWithSum(arr, target));  // Output: Error: Array element out of valid range.
} catch (e) {
    console.error(e.message);
}
