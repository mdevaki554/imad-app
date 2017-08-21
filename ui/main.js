//Counter Example
var counter_button = document.getElementById('counter');

counter_button.onclick = function(){
  //Making req to End point '/Counter'
  var request = new XMLHttpRequest();
  
  //capturing th output from the end point
  request.onreadystatechange = function(){
    if (request.readyState ===   XMLHttpRequest.DONE) {
        if(reques.status === 200 ){
        var counter = request.responseText;
        var span_count = document.getElementById('count');
        span_count.innerHTML = counter.toString();
        }
    }
  };
};
  

