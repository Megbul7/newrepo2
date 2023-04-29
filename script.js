"use strict";
//Test Date for BMI
//Mark: 78 kg and 1.69m Tall
//John: 92 kg and 1.95m Tall

//Calculate BMIs

//BMI formula = mass/height ** 2

//Store Mark and John's mass/height into variables

const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const convertBMI = function (height, weight) {
  console.log(Math.trunc(weight / height ** 2));
};

convertBMI(markHeight, markWeight);

const johnBMI = convertBMI(johnHeight, johnWeight);
const markBMI = convertBMI(markHeight, markWeight);

if (johnBMI > markBMI) {
  console.log(`john's BMI ${johnBMI}, is greater than mark's BMI ${markBMI}`);
} else if (markBMI > johnBMI) {
  console.log(`mark's BMI ${markBMI}, is greater than john's BMI ${johnBMI}`);
}
console.log(johnBMI);
