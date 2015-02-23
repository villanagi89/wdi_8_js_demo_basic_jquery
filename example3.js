$(document).ready(function(){
  Tasklist.addToList('Walk dog');
  Tasklist.addToList('Feed dog');

var removeFromList = function(){
  this.remove();
}
var $changeEvent= $('#change');
// had this before
$changeEvent.click(function(){ // when clicked it is passed two arguments a function
    this.remove(); // this attaches an event handler to the selection.
})
// Now this.
$changeEvent.click(removeFromList);
});
// this is the prefered way bc you can have a lot of even listeners.
$changeEvent.on('click', removeFromList);
});
//Module pattern

var Tasklist = (function(){
  var addToList = function(text){
    var $taskList= $('#tasks');
    var $newTask = $('<li>');
    $newTask.text(text);
    $taskList.append($newTask);
  };
  return {addToList: addToList};
})();


// $(document).ready(function() {
//   App.addToList('Walk dog');
//   App.addToList('Feed dog');

//   var $h1 = $('h1');

//   // Now this.
//   $h1.on('click', App.removeFromList);
// });

// var App = (function() {
//   var addToList = function(text) {
//     var $taskList = $('#tasks');
//     var $newTask = $('<li>');
//     $newTask.text(text);
//     $taskList.append($newTask);
//   };

//   var removeFromList = function() {
//     this.remove();
//   }

//   return { addToList: addToList, removeFromList: removeFromList };
// })();
