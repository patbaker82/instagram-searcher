/**
 * Created by pbaker on 10/7/14.
 */
angular.module('instagramSearcher', ['ngAnimate'])
    .controller('SearchController', ['$scope', '$http', SearchController]);

function SearchController ($scope, $http) {
    $scope.submit = function () {
        var request = {
            client_id: "23851949304342aeabce2f9e7a24dea1",
            callback: "JSON_CALLBACK"
        };

        var url = "https://api.instagram.com/v1/tags/" + $scope.searchCriteria + "/media/recent";

        $http({
            method: 'JSONP',
            url: url,
            params: request
        })
            .success(function(result) {
                $scope.searchCriteria = "";
                $scope.searchResults = result;
            })
            .error(function() {
                alert('error')
            });
    }
}
