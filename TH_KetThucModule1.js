//BAI 1
// function findThirdHighestScore(scores) {
//     if (scores.length < 3) {
//         return null; // Trả về null nếu mảng không có đủ 3 phần tử
//     }
//
//     let highest = -Infinity;
//     let secondHighest = -Infinity;
//     let thirdHighest = -Infinity;
//
//     for (let i = 0; i < scores.length; i++) {
//         const score = scores[i];
//
//         if (score > highest) {
//             thirdHighest = secondHighest;
//             secondHighest = highest;
//             highest = score;
//         } else if (score > secondHighest && score < highest) {
//             thirdHighest = secondHighest;
//             secondHighest = score;
//         } else if (score > thirdHighest && score < secondHighest) {
//             thirdHighest = score;
//         }
//     }
//
//     return thirdHighest;
// }
// let scores = [85, 92, 78, 90, 88, 95, 80, 87];
// let thirdHighestScore = findThirdHighestScore(scores);
// console.log("Third highest score:", thirdHighestScore);

//BAI 2
// function tryRemoveFromArray(arr, index) {
//     if (index < 0 || index >= arr.length) {
//         return arr;
//     }
//
//     const newArr = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== index) {
//             newArr.push(arr[i]);
//         }
//     }
//
//     return newArr;
// }
//
// let array = [1, 2, 3, 4, 5];
// let indexToRemove = 2;
// let newArray = tryRemoveFromArray(array, indexToRemove);
// console.log("New array:", newArray);

//BAI 3
// function checkSubstring(str1, str2) {
//     if (str1.length > str2.length) {
//         return false;
//     }
//
//     for (let i = 0; i <= str2.length - str1.length; i++) {
//         let j = 0;
//
//         while (j < str1.length && str1[j] === str2[i + j]) {
//             j++;
//         }
//
//         if (j === str1.length) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// let str1 = "abc";
// let str2 = "xyzabcdef";
// let isSubstring = checkSubstring(str1, str2);
// console.log("Is substring:", isSubstring);

//BAI 4
class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const rectangle = new Rectangle(10, 10, 200, 100, "#000000");
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
rectangle.render(canvas);
