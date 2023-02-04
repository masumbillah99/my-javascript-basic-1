//  ------ প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট ------
/** 1. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট 
হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে
সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
*/
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}

const result = feetToInch(10);
// console.log(result, 'inch');

/** 2. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই
ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে 
রেজাল্ট রিটার্ন করবে।
*/
function centimeterToMeter(centimeter) {
    const meter = centimeter * 0.01;
    return meter;
}

const result2 = centimeterToMeter(10);
// console.log(result2, 'meter');

/** 3. count paper (paper requirements)
     * book1 ---> 100
     * book2 ---> 200
     * book3 ---> 300
    আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements 
এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই 
কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর 
থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো 
হবে সেটাই প্যারামিটার হিসেবে নিবে। এইবার ভালো করে খেয়াল করো। প্রথম বই ছাপানোর জন্য 
পৃষ্ঠা লাগবে ১০০ টা, সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা, তৃতীয় বই ছাপানোর জন্য 
পৃষ্ঠা লাগবে ৩০০ টা। এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা 
যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। 
আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা 
রিটার্ন করবে। 
*/
function paperRequirements(book1, book2, book3) {
    const bookOne = 100;
    const bookTwo = 200;
    const bookthree = 300;
    let book1Paper = book1 * bookOne;
    let book2Paper = book2 * bookTwo;
    let book3Paper = book3 * bookthree;
    // console.log(book1Paper, book2Paper, book3Paper);

    const totalPaper = book1Paper + book2Paper + book3Paper;
    return totalPaper;
}

const result3 = paperRequirements(5, 10, 1);
// console.log('total', result3, 'paper');

/** 4. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট 
প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। 
এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  
*/
function bestFriend(array) {
    let large_name = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (large_name.length < element.length) {
            large_name = element;
        }
    }
    return large_name;
}

const friends_array = ['sajid', 'mamun mia', 'jafor ullah sarafat', 'kamal pasa', 'jubayer', 'chinku'];
const result4 = bestFriend(friends_array);
// console.log(result4);

/** 5. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ 
হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। 
অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর 
যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা 
পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

*/
function onlyPositive(array) {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= 0) {
            positive.push(element);
        }
        else {
            break;
        }
    }
    return positive;
}

const array = [45, 46, 96, 93, -45, -32, 23];
const result5 = onlyPositive(array);
console.log('Positive numbers array:', result5);

// ------ প্রাকটিস প্রব্লেম- জাস্ট ২ টা। ------
/** একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে 
কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব
নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া 
থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।
    Area of triangle formula = √[s(s – a)(s – b)(s – c)]
*/
function rectangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

const result6 = rectangleArea(3, 5, 7);
console.log('Volume of rectangle is:', result6);

/** কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।
*/

function isPrimeNumber(number) {
    if (number % 2 !== 0) {
        console.log(number, 'Prime number');
    }
    else {
        console.log(number, 'not a prime number');
    }
}

const result7 = isPrimeNumber(15);