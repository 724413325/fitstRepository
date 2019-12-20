var mess1="";
var mess2= "";
day = new Date()
hr = day.getHours()
m = day.getMinutes()
if ((hr>=0)&&(hr<=7))
    {
     if ((m>=0)&&(m<=30))
      {
        mess2= "gcder7";
      }
      if ((m>=31)&&(m<=59))
      {
        mess2= "gcder6";
      }
     }
if ((hr>=8)&&(hr<=13))
    {
     if ((m>=0)&&(m<=30))
      {
        mess2= "gcder7";
      }
      if ((m>=31)&&(m<=59))
      {
        mess2= "gcder6";
      }
     }
if ((hr>=14)&&(hr<=21))
    {
     if ((m>=0)&&(m<=30))
      {
        mess2= "gcdem1";
      }
      if ((m>=31)&&(m<=59))
      {
        mess2= "gcder8";
      }
     }
if ((hr>=22)&&(hr<=23))
    {
     if ((m>=0)&&(m<=30))
      {
        mess2= "gcder7";
      }
      if ((m>=31)&&(m<=59))
      {
        mess2= "gcder6";
      }
     }