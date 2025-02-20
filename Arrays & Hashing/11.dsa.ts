// Valid Palindrome

/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

function isAlphanumericEfficient(str: string): boolean {
    // Pre-compiled regex for better performance in repeated calls
    const ALPHA_NUMERIC = /^[a-zA-Z0-9]+$/;

    // Single-pass character check as fallback
    const checkChar = (char: string): boolean => {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122)
        ); // a-z
    };

    if (!str || str.length === 0) return false;

    // Use regex for short strings, character check for long strings
    return str.length < 100
        ? ALPHA_NUMERIC.test(str)
        : Array.from(str).every(checkChar);
}
function isAlphanumeric(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
}
function isPalindrome(s: string): boolean {
    if (s.length === 1) return true;
    const cleanStr = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    let start = 0,
        end = cleanStr.length - 1;

    while (start <= end) {
        if (
            cleanStr.charAt(start) !== cleanStr.charAt(end)
        ) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
