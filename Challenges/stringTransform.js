function transformString(str) {
    // Validate the input string
    if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
        throw new Error("The string contains invalid characters. Only alphanumeric characters and spaces are allowed.");
    }

    const length = str.length;

    // Check if the length is divisible by 15 (both 3 and 5)
    if (length % 15 === 0) {
        // Reverse the string and then replace each character with its ASCII code
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } 
    // Check if the length is divisible by 3
    else if (length % 3 === 0) {
        // Reverse the string
        return str.split('').reverse().join('');
    } 
    // Check if the length is divisible by 5
    else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } 
    // If none of the conditions are met, return the original string
    else {
        return str;
    }
}

// Example usage
try {
    console.log(transformString("Hamburger"));             // Output: "regrubmaH"
    console.log(transformString("Pizza"));                 // Output: "80 105 122 122 97"
    console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
    console.log(transformString("Example"));               // Output: "Example" (length is 7, not divisible by 3 or 5)
    // console.log(transformString("Hamburger!@"));           // Should throw an error
} catch (e) {
    console.error(e.message);
}
