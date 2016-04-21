angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Buy groceries", task:false}
      , {title: "Clean dog",  task:false}
    ]
  };
  
  function addTask(title) {
    data.tasks.push({title: title, task:data.tasks.length +1});
  }
  
    function removeTask(id){
        data.tasks.splice(data.tasks.indexOf(id), 1);
    }
    
  return {
    data: data
    , addTask: addTask,
      remove: removeTask
  };
});