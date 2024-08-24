
// You should implement your task here.


function towelSort(matrix) {
  return matrix ? matrix.map((a, i) => (i % 2 === 1 ? a.reverse() : a)).flat() : [];
}

module.exports = towelSort;
