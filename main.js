let n = +prompt('высота прямоугольника n = ');
let m = +prompt('ширина прямоугольника m = ');

A = [];
A.length = m;

for (i = 0; i < n; i++) {
  if (i == 0 || i == n - 1) {
    for (j = 0 ; j < A.length; j++) {
      A[j] = ('*');
    }
  } else {
      for (j = 1; j < A.length - 1; j++) {
        A[j] = ('&nbsp;&nbsp');
    }
  }
  document.write(A.join('') + '<br/>');
}
