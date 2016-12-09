var idArray = [1,2,3,4,5,6,7,8,9];

idArray.forEach(function(id){
 	setTimeout(function(){
    document.getElementById(id).style.backgroundColor ='blue';
  }, id * 1000);
});