//Counter Example
var counter_button = document.getElementById('counter');

counter_button.onclick = function(){
  //Create req to End point '/Counter'
  var request = new XMLHttpRequest();
  
  //capturing th output from the end point
  request.onreadystatechange = function(){
    if (request.readyState ===   XMLHttpRequest.DONE) {
        if(request.status === 200 ){
        var counter = request.responseText;
        var span_count = document.getElementById('count');
        span_count.innerHTML = counter.toString();
        }
    }
  };
  
  //Make a req
  request.open('GET', 'http://manikantagupta554.imad.hasura-app.io/counter', true);
  request.send(null);
  
};
  
//Name Capture
var nameInput = doucment.getElementById('name');
var name_value = nameInput.value;
var submit_btn = document.getElementById('submit_btn');
submit_btn.onclick = function(){
    
}
