// const app = "I don't do much."
// document.addEventListener('keydown', function(e) {
//   console.log(e.which)
// });
// // right arrow === 39
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    var rightNumbers =
    dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)
    dodger.style.right = `${right -1}px`
  }
});

var dodger = document.getElementById('dodger')

function moveDodgerRight() {
  var rightNumbers =
  dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  if (right > 0) {
    dodger.style.right = `${right -1}px`
  }
}
