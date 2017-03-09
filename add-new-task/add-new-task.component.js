'use strict';

angular.
  module('addNewTask').
  component('addNewTask', {
    templateUrl: 'add-new-task/add-new-task.template.html',
    controller:
      function NewTaskController($http) {
        var self = this;
        this.addTask = function() {
          $http.put('/addnew', this.newTask).then(function(response) {
              self.refresh();
          });
        };
        this.refresh = function() {
          $http.get('/addnew').then(function(response) {
            self.tasks = response;
            console.log(self.tasks);
            self.newTask = {};
          });
      }
      }
  });