//3. JavaScript: 重構
//問題：重構這段程式碼並說明原因

//先檢查型別，如果輸入的值不是string就返回錯誤訊息
//如果沒有姓或名其中一項，就return有的那一項，就不會有lastName前面有多一個空格的問題
//運用template literals同時回傳兩者，讓他更加簡潔

function formatName(firstName = "", lastName = "") {
  if (typeof firstName !== "string" || typeof lastName !== "string")
    return "You enter name value in wrong type";

  if (firstName && lastName === "") return firstName;
  if (firstName === "" && lastName) return lastName;

  return `${firstName} ${lastName}`;
}

console.log(formatName(2));
console.log(formatName("Betty", "Smith"));
console.log(formatName("Betty", ""));
console.log(formatName("Betty"));
console.log(formatName("", "Smith"));
