angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, Task) {
  $scope.data = Task.data;
    
  var tasks = {
    newTask: ""
  };
  
  function addTask() {
    Task.addTask(tasks.newTask);
    tasks.newTask = "";
  }
  
  $scope.tasks = tasks;
  $scope.addTask = addTask;      
});
