//Counter Example
var counter_button = document.getElementById('counter');
var counter = 0;
counter_button.onClick = function( ){
  //Making req to End point '/Counter'
  
  //capturing th output from the end point
  
  //rendering the output on count 
  counter = counter +1 ;
  var span_count = document.getElementById('count');
  span_count.innerHTML = counter.toString();
};