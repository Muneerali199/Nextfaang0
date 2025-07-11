// src/data/leetCodeQuestions.ts
export const leetCodeQuestions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
    `,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    approaches: [
      {
        title: "Brute Force",
        description: "Check every possible pair of numbers in the array.",
        complexity: "O(n²) time, O(1) space"
      },
      {
        title: "Hash Map",
        description: "Use a hash map to store visited numbers and check for complements.",
        complexity: "O(n) time, O(n) space"
      }
    ],
    youtubeLinks: [
      {
        title: "NeetCode Explanation",
        url: "https://www.youtube.com/embed/KLlXCFG5TnA"
      }
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
    // Your code here
};`,
      python: `def twoSum(nums, target):
    # Your code here`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [[2,7,11,15], 9], output: [0,1] },
      { input: [[3,2,4], 6], output: [1,2] },
      { input: [[3,3], 6], output: [0,1] }
    ],
    category: "Array"
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    description: `
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    `,
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807."
      }
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ],
    approaches: [
      {
        title: "Elementary Math",
        description: "Simulate digit-by-digit addition with carry handling.",
        complexity: "O(max(m,n)) time, O(max(m,n)) space"
      }
    ],
    youtubeLinks: [
      {
        title: "Visual Explanation",
        url: "https://www.youtube.com/embed/wgFPrzTjm7s"
      }
    ],
    starterCode: {
      javascript: `function addTwoNumbers(l1, l2) {
    // Your code here
};`,
      python: `def addTwoNumbers(l1, l2):
    # Your code here`,
      java: `class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [[2,4,3], [5,6,4]], output: [7,0,8] },
      { input: [[0], [0]], output: [0] },
      { input: [[9,9,9,9,9,9,9], [9,9,9,9]], output: [8,9,9,9,0,0,0,1] }
    ],
    category: "Linked List"
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: "s = \"abcabcbb\"",
        output: "3",
        explanation: "The answer is \"abc\", with the length of 3."
      },
      {
        input: "s = \"bbbbb\"",
        output: "1",
        explanation: "The answer is \"b\", with the length of 1."
      }
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    approaches: [
      {
        title: "Sliding Window",
        description: "Maintain a window of characters and slide it when duplicates are found.",
        complexity: "O(n) time, O(min(m,n)) space (where m is character set size)"
      }
    ],
    youtubeLinks: [
      {
        title: "NeetCode Explanation",
        url: "https://www.youtube.com/embed/wiGpQwVHdE0"
      }
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
    // Your code here
};`,
      python: `def lengthOfLongestSubstring(s):
    # Your code here`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: ["abcabcbb"], output: 3 },
      { input: ["bbbbb"], output: 1 },
      { input: ["pwwkew"], output: 3 }
    ],
    category: "String"
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description: `
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
    `,
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2."
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
      }
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000",
      "0 <= n <= 1000",
      "1 <= m + n <= 2000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6"
    ],
    approaches: [
      {
        title: "Binary Search",
        description: "Find partition points using binary search approach.",
        complexity: "O(log(min(m,n))) time, O(1) space"
      }
    ],
    youtubeLinks: [
      {
        title: "Detailed Explanation",
        url: "https://www.youtube.com/embed/q6IEA26hvXc"
      }
    ],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
    // Your code here
};`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Your code here`,
      java: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [[1,3], [2]], output: 2.0 },
      { input: [[1,2], [3,4]], output: 2.5 },
      { input: [[0,0], [0,0]], output: 0.0 }
    ],
    category: "Binary Search"
  },
  {
    id: 5,
    title: "Reverse Integer",
    difficulty: "Easy",
    description: `
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
    `,
    examples: [
      {
        input: "x = 123",
        output: "321"
      },
      {
        input: "x = -123",
        output: "-321"
      }
    ],
    constraints: [
      "-2^31 <= x <= 2^31 - 1"
    ],
    approaches: [
      {
        title: "Pop and Push Digits",
        description: "Pop the last digit and push it to the front while checking for overflow.",
        complexity: "O(log(x)) time, O(1) space"
      }
    ],
    youtubeLinks: [
      {
        title: "Step-by-Step Solution",
        url: "https://www.youtube.com/embed/HAgLH58IgJQ"
      }
    ],
    starterCode: {
      javascript: `function reverse(x) {
    // Your code here
};`,
      python: `def reverse(x):
    # Your code here`,
      java: `class Solution {
    public int reverse(int x) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [123], output: 321 },
      { input: [-123], output: -321 },
      { input: [120], output: 21 },
      { input: [1534236469], output: 0 }
    ],
    category: "Math"
  },
  {
    id: 6,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: `
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
    `,
    examples: [
      {
        input: "s = \"()\"",
        output: "true"
      },
      {
        input: "s = \"()[]{}\"",
        output: "true"
      }
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    approaches: [
      {
        title: "Stack",
        description: "Use a stack to track opening brackets and match them with closing ones.",
        complexity: "O(n) time, O(n) space"
      }
    ],
    youtubeLinks: [
      {
        title: "Visual Explanation",
        url: "https://www.youtube.com/embed/WTzjTskDFMg"
      }
    ],
    starterCode: {
      javascript: `function isValid(s) {
    // Your code here
};`,
      python: `def isValid(s):
    # Your code here`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: ["()"], output: true },
      { input: ["()[]{}"], output: true },
      { input: ["(]"], output: false },
      { input: ["([)]"], output: false }
    ],
    category: "Stack"
  },
  {
    id: 7,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description: `
Merge two sorted linked lists and return it as a sorted list. 
The list should be made by splicing together the nodes of the first two lists.
    `,
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]"
      }
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both l1 and l2 are sorted in non-decreasing order."
    ],
    approaches: [
      {
        title: "Iterative",
        description: "Compare nodes and build the merged list step by step.",
        complexity: "O(n + m) time, O(1) space"
      },
      {
        title: "Recursive",
        description: "Recursively merge the lists by comparing nodes.",
        complexity: "O(n + m) time, O(n + m) space (call stack)"
      }
    ],
    youtubeLinks: [
      {
        title: "Step-by-Step Solution",
        url: "https://www.youtube.com/embed/XIdigk956u0"
      }
    ],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
    // Your code here
};`,
      python: `def mergeTwoLists(l1, l2):
    # Your code here`,
      java: `class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [[1,2,4], [1,3,4]], output: [1,1,2,3,4,4] },
      { input: [[], []], output: [] },
      { input: [[], [0]], output: [0] }
    ],
    category: "Linked List"
  },
  {
    id: 8,
    title: "Maximum Subarray",
    difficulty: "Easy",
    description: `
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
    `,
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "[4,-1,2,1] has the largest sum = 6."
      }
    ],
    constraints: [
      "1 <= nums.length <= 3 * 10^4",
      "-10^5 <= nums[i] <= 10^5"
    ],
    approaches: [
      {
        title: "Kadane's Algorithm",
        description: "Track maximum subarray sum ending at each position.",
        complexity: "O(n) time, O(1) space"
      }
    ],
    youtubeLinks: [
      {
        title: "Visual Explanation",
        url: "https://www.youtube.com/embed/5WZl3MMT0Eg"
      }
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
    // Your code here
};`,
      python: `def maxSubArray(nums):
    # Your code here`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [[-2,1,-3,4,-1,2,1,-5,4]], output: 6 },
      { input: [[1]], output: 1 },
      { input: [[5,4,-1,7,8]], output: 23 }
    ],
    category: "Dynamic Programming"
  },
  {
    id: 9,
    title: "Climbing Stairs",
    difficulty: "Easy",
    description: `
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
    `,
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps"
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step"
      }
    ],
    constraints: [
      "1 <= n <= 45"
    ],
    approaches: [
      {
        title: "Dynamic Programming",
        description: "Use Fibonacci sequence approach where ways[n] = ways[n-1] + ways[n-2].",
        complexity: "O(n) time, O(1) space"
      }
    ],
    youtubeLinks: [
      {
        title: "Step-by-Step Explanation",
        url: "https://www.youtube.com/embed/Y0lT9Fck7qI"
      }
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
    // Your code here
};`,
      python: `def climbStairs(n):
    # Your code here`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [2], output: 2 },
      { input: [3], output: 3 },
      { input: [5], output: 8 }
    ],
    category: "Dynamic Programming"
  },
  {
    id: 10,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    description: `
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Inorder traversal: Left -> Root -> Right
    `,
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]"
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    approaches: [
      {
        title: "Recursive",
        description: "Implement the traversal recursively following Left-Root-Right order.",
        complexity: "O(n) time, O(n) space (call stack)"
      },
      {
        title: "Iterative",
        description: "Use a stack to simulate the recursive process.",
        complexity: "O(n) time, O(n) space"
      }
    ],
    youtubeLinks: [
      {
        title: "Visual Explanation",
        url: "https://www.youtube.com/embed/g_S5WuasWUE"
      }
    ],
    starterCode: {
      javascript: `function inorderTraversal(root) {
    // Your code here
};`,
      python: `def inorderTraversal(root):
    # Your code here`,
      java: `class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Your code here
    }
}`
    },
    testCases: [
      { input: [[1,null,2,3]], output: [1,3,2] },
      { input: [[]], output: [] },
      { input: [[1]], output: [1] }
    ],
    category: "Tree"
  }
];