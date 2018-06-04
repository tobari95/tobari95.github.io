function generateMatrix(row, col, elt = 0) {
  var mat = new Array(row);
  for (var i = 0; i < row; i++) {
    mat[i] = new Array(col);
    for (var j = 0; j < col; j++) {
      mat[i][j] = elt;
    }
  }
  return mat;
}

// x未満の非負整数から一つランダムに整数を選択する
function randint(x) {
  return Math.floor(Math.random() * x);
}
