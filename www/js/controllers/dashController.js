app.controller('DashCtrl', function($scope) {

  $('#options').hide(0);

  $scope.addRecipe = function(){
    console.log("click");
  };

  $scope.showOptions = function(){
    $('#options').toggle('1000');
  };

  $scope.logout = function(){
    $('#options').hide(0);
    console.log("logout");
  };

  $scope.options = function(){
    $('#options').hide(0);
    console.log("goOptions");
    location.href = "#/account";
  };

})
