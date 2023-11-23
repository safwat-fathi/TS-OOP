// * Note:
// As a rule of thumb, you should be declaring interfaces first. However, when you want to combine or create new types on the fly, then you should use types.

// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

const a = [-1, -3];

// TSME interview problem
function sol(A: number[]) {
  const checked: any = {};
  let min = Math.min(...A);
  let max = Math.max(...A);
  let smallestNum = 1;
  let c = 1;

  console.log("🚀 ~ sol ~ min:", min);
  console.log("🚀 ~ sol ~ max:", max);
  for (let i in A) {
    if (!checked[A[i]]) {
      checked[A[i]] = true;
    }
  }

  while (c <= max) {
    console.log("current c: ", c);

    if (!checked[c]) {
      console.log("not checked:", c);
    }

    c++;
  }

  return smallestNum;
  // console.log("found:", found);
}

// import HttpClient from "./http-client";
// const httpClient = new HttpClient();
// httpClient
//   .get("/random_joke")
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log("🚀 ~ err:", err);
//   });

// * conditional typing
interface IProps {
  name: string;
}

interface IMaleProps {
  gender: "male";
  salary: number;
}

interface IFemaleProps {
  gender: "female";
  weight: number;
}

type ConditionalProps = IProps & (IMaleProps | IFemaleProps);

const male: ConditionalProps = {
  name: "Ali",
  gender: "male",
  salary: 500,
};

const female: ConditionalProps = {
  name: "Sara",
  gender: "female",
  weight: 50,
};
