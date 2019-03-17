function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (var i=0;i<musicians.length;i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array

}// add solution here

function johnLennonFacts(facts) {
var array = []
var x =0
  while (x<=facts.length-1) {
    array.push(`${facts[x]}!!!`)
    x++
  }
  return array
}
