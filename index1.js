//1. JavaScript: 字串反轉

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”
