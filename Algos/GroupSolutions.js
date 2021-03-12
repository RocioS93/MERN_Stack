function bubbleSort(nums) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;

    for (let i = 0; i < nums.length - 1; i++) {
      const j = i + 1;

      if (nums[i] > nums[j]) {
        isSorted = false;
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}
//   -----------------------------------------
function selectionSort(nums) {
  const len = nums.length;
  let selectedIdx = 0;
  let idxOfCurrMin = 0;

  while (selectedIdx < len) {
    for (let i = selectedIdx; i < len; i++) {
      if (nums[i] < nums[idxOfCurrMin]) {
        idxOfCurrMin = i;
      }
    }

    if (nums[selectedIdx] !== nums[idxOfCurrMin]) {
      const temp = nums[selectedIdx];
      nums[selectedIdx] = nums[idxOfCurrMin];
      nums[idxOfCurrMin] = temp;
    }
    selectedIdx += 1;
    // reset idxOfCurrMin to the next selected index we are going to work with to find the next min
    idxOfCurrMin = selectedIdx;
  }
  return nums;
}
//   -----------------------------------------
