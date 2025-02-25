// 20. Valid Parentheses

/* 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

function isValid(s: string): boolean {
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        let val = s.charAt(i);
        if (val == "(") {
            stack.push(`)`);
        } else if (val == "[") {
            stack.push("]");
        } else if (val == "{") {
            stack.push("}");
        } else if (stack[stack.length - 1] === val) {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length != 0) return false;
    return true;
}

const s = "([]";
console.log(isValid(s));
