if(typeof module !== 'undefined')
{
  module.exports = 0;
}
else if(typeof window !== 'undefined')
{
  // Set a global variable for browsers 
  window.numberZero = 0;
}
