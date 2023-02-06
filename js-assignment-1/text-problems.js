/** 
ফাংশনের নাম হুবহু আমি যেমন বলে দিয়েছি সেটার মতো করে হতে হবে। অন্য কোন নাম/ অথবা নামের কোন অক্ষর ছোট , কোন অক্ষর বড় করলে হবে না , 
হুবহু আমার মত দিতে হ

----- Problem 1: Let’s play a mind game -----
তোমাকে একটা function দেওয়া হবে called “mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে। 
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। 
Sample Input & Output:-
Input: 5
Output: 7.5

Input: 50
Output: 65

Input: -33
Output: -25.5


----- Problem 2: Finding even or odd ------
তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 
এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
Sample Input & Output:-
Input: ‘Phero’
Output: Odd

Input: ‘Batch7’
Output: Even

Input: ‘chatgpt’
Output: Odd


----- Problem 3: Is Less or Greater than seven -----
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং 
৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.
Sample Input & Output:-
Input: 6
Output: -1

Input: -15
Output: 44

Input: 13
Output: 6


----- Problem 4: Finding Bad data -----
তোমাকে একটা function দেওয়া হবে called findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number 
(less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number 
যদি positive হয় সেটাকে আমরা বলব “Good Data”. এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0

Input: [ 2, -5, -7, -13 ]
Output: 3

Input: [ -4, -9, -5, -33, -55 ]
Output: 5


----- Problem 5: Convert your gems into diamond ----
তোমাকে একটা function দেওয়া হবে called gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। 
total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96

Input: 20, 200, 50
Output: 6970

Input: 100, 5, 1
Output: 303


----- কিছু কমন প্রশ্ন -----

প্রশ্ন-১: ফ্যাংশন এর ভিতরে কি console.log লিখবো নাকি রিটার্ন করবো?
উত্তর: তুমি চাইলে তোমার নিজের জন্য বা বুঝার জন্য console.log লিখতে পারো। সেটা অপশনাল। তবে ফাংশনের রেজাল্ট অবশ্যই রিটার্ন করতে হবে। সেটা console.log করলে কাজ হবে না। 

প্রশ্ন-২: সবসময় কি সংখ্যা বা স্ট্রিং রিটার্ন করবো।
উত্তর: সব প্যারামিটার ঠিক থাকলে সঠিক সংখ্যা বা সঠিক ভ্যালু রিটার্ন করবে। যদি এক বা একাধিক ইনপুট খারাপ থাকে তাহলে কোন error স্ট্রিং হিসেবে রিটার্ন করে দিবে। 

যেখানে সংখ্যা রিটার্ন করার কথা সেখানে সংখ্যা রিটার্ন করবে। যেখানে বুলিয়ান ভ্যালু রিটার্ন করার কথা সেখানে true/false রিটার্ন করবে।

অর্থাৎ টোটাল নাম্বার কত হবে সেখানে জাস্ট সংখ্যা রিটার্ন করবে। সেখানে জোর করে সংখ্যাকে স্ট্রিং এ কনভার্ট করে বা the number is 200 এমন করা যাবে না। জাস্ট 200 রিটার্ন করে দিবে। 

প্রশ্ন-৩: ফাংশনের বাইরে কি console.log করতে হবে?
উত্তর: ফাংশনের বাইরে console.log লেখা বা না লেখা অপশনাল। তুমি চাইলে তোমার কোড চেক করার জন্য। বা যে রেজাল্ট দেয়ার কথা সেটা ঠিক মতো দিচ্ছে কিনা সেটা ভেরিফাই করার জন্য ওই 
ফাংশনকে কল করে তার রিটার্ন যে ভ্যালু আছে সেটা console.log করে চেক করতে পারো। তবে আমাদের এসাইনমেন্ট এর জন্য এইটা করা জরুরি না। আমরা শুধু মেইন ফাংশনটা নিয়ে সেটাকে চালিয়ে 
দেখবো ঠিকমতো কাজ করছে কিনা। 

প্রশ্ন-৪: var ব্যবহার করা যাবে?
উত্তর: না। let/const ব্যবহার করো। 

প্রশ্ন-৫: ইউজারের কাছ থেকে কোন ইনপুট নিতে হবে? [ IMPORTANT ]
উত্তর: এসাইনমেন্ট এর জন্য ইউজারের কাছ থেকে কোন ইনপুট নেয়া লাগবে না। জাস্ট ফাংশন লিখলেই হবে। আমরা তোমার কোড নিয়ে সেটার ফাংশনকে কল করবো। 

তুমি চেক করার সময় ইনপুট প্যারামিটার দিয়ে চেক করতে পারো। তারপর চেক করা শেষ হলে সেই কোড অবশ্যই কমেন্ট করে ফেলতে হবে অথবা মুছেই ফেলতে পারো।আমরা শুধু ফাংশনের ভিতরে ঠিক 
আছে কিনা দেখব । তাই সাবমিট করার সময় তোমাদের console.log গুলো অবশ্যই মুছে ফেলবা।

ফাংশনকে আমরা বিভিন্ন সংখ্যা -- ভালো এবং খারাপ সংখ্যা দিয়ে কল করবো। তখন যদি ঠিক রেজাল্ট দেয় তাহলেই হবে। তোমাদের সুবিধার্থে নিচে একটি ডেমো দেওয

------ WRONG FORMAT -------
    problem 1 

function makeDouble(number){

 // do not write anything like this, just return the result

 return "Problem one result: " + number* 2;

}

const result = makeDouble(5);

// remove any console.log() or function call like this form here👆

------- CORRECT FORMAT -------

function makeDouble(number) {

 return number * 2;

}

প্রশ্ন-৬: আমি কিছু বুঝতেছি না কি করবো?
উত্তর: প্রব্লেমগুলা আলাদা আলাদা ভাবে চিন্তা করো। আমাদের মডিউলগুলো ঠিক মতো দেখলে মোটামুটি এই প্রব্লেমগুলা সলভ করে ফেলতে পারবে।  

জাস্ট যে যে প্রবলেম সল্ভ করতে বলা হয়েছে সেগুলা একটু ধীরে ধীরে বুঝার চেষ্টা করো। দেখো বুঝতে পারো কিনা। হতে পারে আমাদের মডিউল এর কোন একটি ভিডিও এর সাথে ডাইরেক্ট বা 
ইনডাইরেক্ট মিল আছে। তাহলে সেই জিনিস খুঁজে বের করে তারপর সেটা অনুসারে করার চেষ্টা করো।  
*/