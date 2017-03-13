'use strict';

angular.
  module('addNewTask').
  component('addNewTask', {
    templateUrl: 'add-new-task/add-new-task.template.html',
    bindings: {
        refresh: '<'
    },
    controller:
      function AddNewTaskController($http) {
        var self = this;
        this.newTask = {};
        this.newTask.name = '';
        this.newTask.description = '';
        this.newTask.important = false;
        this.resetForm = function() {
          this.addNewForm.$setPristine();
          this.addNewForm.$setUntouched();
        }
        this.addTask = function() {
          if (this.newTask.name) {
            $http.put('/addnew', this.newTask).then(function(response) {
                self.newTask = {};
                self.newTask.name = '';
                self.newTask.description = '';
                self.newTask.important = false;
                self.resetForm();
                self.refresh();
            });
          }
        };
      }
  });