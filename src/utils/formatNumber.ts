const cutUnderThirdDecimalPoint = (num: number) => {
  return Math.floor(num * Math.pow(10, 2)) / Math.pow(10, 2);
};

const ranges = [
  { divider: 1e18, suffix: "E" },
  { divider: 1e15, suffix: "P" },
  { divider: 1e12, suffix: "T" },
  { divider: 1e9, suffix: "G" },
  { divider: 1e6, suffix: "M" },
  { divider: 1e3, suffix: "k" }
];

const formatNumber = (n: number) => {
  for (var i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      const resultNum = cutUnderThirdDecimalPoint(n / ranges[i].divider);
      return resultNum.toString() + ranges[i].suffix;
    }
  }
  return n.toString();
};

export default formatNumber;
