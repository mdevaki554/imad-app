console.log('Loaded!');
var mainText = document.getElementById("main-text");
mainText.innerHTML = 'New Value';

//Move the img
var img = document.getElementById("madi");
img.onClick = function() {
img.style.marginLeft = '500px';
};
console.log(img);
console.log(img.onClick);