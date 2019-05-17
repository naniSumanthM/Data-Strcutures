let twoSum1 = (arr, target) => {
  let s = new Set();
  for (let i = 0; i < arr.length; i++) {
    let temp = target - arr[i];
    if (temp >= 0 && s.has(temp)) {
      console.log(temp, arr[i], `${temp} + ${arr[i]} = ${temp + arr[i]}`);
      console.log(temp, arr[i]);
    }
    s.add(arr[i]);
  }
};

console.log(twoSum1([1, 3, 2, 5, 3], 6));

let twoSum2 = (array, target) => {
  let set = new Set();
  for (let i = 0; i < array.length; i++) {
    let remaining = target - array[i];
    console.log("remaining", remaining);
    if ((remaining >= 0) & set.has(remaining)) {
      console.log(remaining, array[i]);
    } else {
      set.add(array[i]);
    }
    console.log(set);
  }
};

let twoSumx = (nums, target) => {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (hashMap.has(difference)) {
      return [hashMap.get(difference), i];
    } else {
      hashMap.set(nums[i], i);
    }
  }
};
