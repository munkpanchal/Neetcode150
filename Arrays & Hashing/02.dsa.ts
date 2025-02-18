/* 

242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


*/

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const obj = new Map<string, number>();

    for (let i = 0; i < t.length; i++) {
        let val = s.charAt(i);
        obj.has(val)
            ? obj.set(val, obj.get(val)! + 1)
            : obj.set(val, 1);
    }

    for (let i = 0; i < s.length; i++) {
        let val = s.charAt(i);
        if (!obj.has(val) || obj.get(val) == 0) {
            return false;
        }
        obj.set(val, obj.get(val)! - 1);
    }
    return true;
}

const s = "rat",
    t = "car";

console.log(isAnagram(s, t));
