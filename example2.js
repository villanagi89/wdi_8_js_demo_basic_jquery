// We needs this to prevent from Js from running
$(document).ready(function(){
  // save what we have selected and then worked on it. It saves performance.
  var $change = $('#change');
  $change.text('Goodbye');

  // var $tasks = $('#tasks');
  // $tasks.add("<li>One more</li>").appendTo("#tasks");

  var $taskList = $('#tasks');
  var $newTask = $('<li>');
  $newTask.text('Eat Appples');
  $taskList.append($newTask);
  // with the <li> it makes a new one
  // without it (li) only finds it.
   var $newTask = $('<li>'); // Create a different/new element
  $newTask.text('Bake Appples');
  $taskList.append($newTask);

});

