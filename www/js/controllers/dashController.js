app.controller('DashCtrl', function($scope,$timeout) {

   $scope.listCanSwipe = true;

  $('#options').hide(0);
  // $('#optionEdit').hide(0);
  // $('#optionDelete').hide(0);
  // $('#btnAlt').hide(0);


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

  // $scope.showEditOptions = function(){
  //   console.log("mostrar opciones de edicion");
  //   $('#btnPri').toggle(0);
  //   $('#btnAlt').toggle(0);
  //   $('#optionEdit').slideToggle('fast');
  //   setTimeout(function() { $('#optionDelete').slideToggle('fast'); }, 500);
  // };

  $scope.editRecipe = function(){
    console.log("editarReceta");
  };

  $scope.deleteRecipe = function(){
    console.log("borrarReceta");
  };


})
