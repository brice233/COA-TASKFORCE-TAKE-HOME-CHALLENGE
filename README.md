# COA-TASKFORCE-TAKE-HOME-CHALLENGE 

# Gallery 
This is a simple HTML and CSS implementation of a responsive image gallery. The gallery features four different images of animals with overlay text displaying information about each animal.

## Features

- Responsive design using CSS grid and flexbox
- Overlay text with animal name, species, and location
- "Know more" button for each image

## Technologies Used

- HTML
- CSS
- JS

## File Structure

- `index.html`: The main HTML file containing the structure of the gallery
- `css/gallery.css`: The CSS file containing styles for the gallery
- `assets/`: Folder containing the image assets used in the gallery

## Usage

To view the gallery, simply open the `index.html` file in a web browser. The gallery should render correctly and display the four images with their respective overlay text.

## Customization

To customize the gallery, you can modify the HTML and CSS files as needed. Here are some potential customizations:

- Change the images by replacing the `src` attribute of the `<img>` elements with your desired image paths
- Modify the overlay text by updating the content within the `<h1>`, `<h2>`, `<h3>`, and `<h4>` elements
- Adjust the styling of the gallery by modifying the CSS rules in `gallery.css`
- Add or remove additional image sections by duplicating or removing the `.image-interaction` sections in the HTML

## License

This project is open-source and available for personal and commercial use.

# JavaScript Challenges

This repository contains two JavaScript challenges with the following problem statements and solutions:

## 1. Find Subarray with Sum

### Problem Statement

Given an array of integers `arr` and an integer `target`, determine if there exists a subarray in `arr` that sums up to the `target` value. The array elements and the target sum can be both positive and negative integers.

The constraints for this problem are:

- The length of the input array `arr` is between `1` and `10^5`.
- Each element in the array `arr` is between `-10^9` and `10^9`.
- The target sum is between `-10^9` and `10^9`.

### Solution

The solution is implemented in the `arrayMap.js` file. It uses a hashmap approach to solve the problem efficiently. Here's how it works:

1. First, it checks if the target sum and array elements are within the valid range of `-10^9` to `10^9`. If not, it throws an error.
2. It initializes an empty map `cumulativeSumMap` to store cumulative sums and sets the initial cumulative sum of `0` to `1`.
3. It iterates through the array, updating the cumulative sum with each element.
4. For each cumulative sum, it checks if the difference between the cumulative sum and the target sum exists in the `cumulativeSumMap`. If it does, it means there is a subarray that sums to the target, and the function returns `true`.
5. If no subarray is found after iterating through the entire array, the function returns `false`.

The time complexity of this solution is O(n), where n is the length of the input array, as it iterates through the array once. The space complexity is O(n) in the worst case, when all elements in the array are unique.

## 2. Transform String

### Problem Statement

Given a string `str`, transform it based on the following rules:

- If the length of the string is divisible by 15 (both 3 and 5), reverse the string and then replace each character with its ASCII code.
- If the length of the string is divisible by 3, reverse the string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If none of the above conditions are met, return the original string.

### Solution

The solution is implemented in the `stringTransform.js` file. Here's how it works:

1. First, it validates the input string to ensure it contains only alphanumeric characters and spaces using a regular expression. If the string contains invalid characters, it throws an error.
2. It calculates the length of the string.
3. It checks if the length is divisible by 15 (both 3 and 5). If it is, it reverses the string and then replaces each character with its ASCII code, separated by spaces.
4. If the length is divisible by 3, it reverses the string.
5. If the length is divisible by 5, it replaces each character with its ASCII code, separated by spaces.
6. If none of the conditions are met, it returns the original string.

The time complexity of this solution is O(n), where n is the length of the input string, as it iterates through the string once. The space complexity is O(n) in the worst case, when the transformed string has to be created.

## Usage

To use these solutions, simply include the corresponding JavaScript file in my project and call the respective functions with the appropriate arguments.


// Example usage for "Find Subarray with Sum"
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

// Example usage for "Transform String"
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(transformString("Example")); // Output: "Example"