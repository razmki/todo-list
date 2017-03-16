'use strict';

angular.
module('tasks').
component('tasks', {
    templateUrl: function($element, $attrs) {
        return 'tasks/tasks.template.html';
    },
    bindings: {
        refresh: '<',
        todo: '=',
        nameColumn: '='
    },
    controller: function TaskController($http, $element) {
        self = this;
        this.removeTask = function(name, nameColumn) {
            $http.delete('/addnew/' + name + '/' + nameColumn).then(function(response) {
                self.refresh();
            });
        };
        this.openDescription = function() {
            self.addThreeDots(1);
            $element.find("span").removeClass('line-clamp');

        }
        this.addThreeDots = function(open) {
            if (open) return false;
            var descriptionNode = $element.find("span")[0];
            if (descriptionNode.scrollHeight > 88) {
                return true;
            } else {
                return false;
            }
        }
    }
});
