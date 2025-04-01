function differenceArray(arr1, arr2) {
  return [
    ...arr1.filter((item) => !arr2.includes(item)),
    ...arr2.filter((item) => !arr1.includes(item)),
  ];
}

module.exports = { differenceArray };
