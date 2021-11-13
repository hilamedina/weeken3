function CheckStrings2(x,y)
{//   for (let i = 0; i < y.length && i < x.length; i++){
    if(x.length > y.length)
    {
     return y.length;
    }
     else if (x.length < y.length)
    {
     return x.length;
    }
    else{
        return -1
      }
  }


console.log(CheckStrings2("hi", "hila"));
