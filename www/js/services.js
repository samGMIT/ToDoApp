angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Buy groceries"}
      , {title: "Clean dog"}
    ]
  };
  
  function addTask(title) {
    data.tasks.push({title: title});
  }
  
  return {
    data: data
    , addTask: addTask
  };
});