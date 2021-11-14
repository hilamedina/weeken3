function longestWord(sentence)
{
  let strtoarray = sentence.split(' ');
  let l = strtoarray[0].length;
  let thelongest = [ ];
  for (let i = 1; i <= strtoarray.length - 1; i++)
  {
    if (strtoarray[i].length > l || strtoarray[i].length == l)
    {
      l = strtoarray[i].length;
     thelongest.push(strtoarray[i]);
    }
 }
  return thelongest;
}
let sentence = "hila and tala goinguh hungary"
console.log(longestWord(sentence));