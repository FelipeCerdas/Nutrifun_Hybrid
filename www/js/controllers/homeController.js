app.controller('HomeCtrl', function($scope, $timeout, RecipesService) {

  //la siguiente linea de codigo permite a la vista utilizar el componente de slide
  $scope.listCanSwipe = true;
  //se oculpta por jquery la ventana flotante de options. a la carga de la vista
  $('#options').hide(0);
  $('#noRecipes').hide(0);

  //objeto de recetas
  $scope.recipes = {};

  //funcion que recupera las recetas por medio del id de usuario
  $scope.getRecipes = function(){
    //llamado al servicio que obtiene recetas.
    RecipesService.getRecipesByIdUser($scope.user_logged.idUser).then(function(result){
      $scope.recipes = RecipesService.getObject();
    });
  };

  //funcion para agreagar una receta
  $scope.addRecipe = function(){
    $('#options').hide(0);
    console.log("agregar receta");
    location.href = "#/addRecipe";
  };

  //funcion que muestra la ventana flotante
  $scope.showOptions = function(){
    $('#options').toggle('1000');
  };

  //funcion que se encargara del logout
  $scope.logout = function(){
    $('#options').hide(0);
    console.log("logout");
  };

  //funcion que redirige a la pantalla de perfil
  $scope.options = function(){
    $('#options').hide(0);
    console.log("goOptions");
    location.href = "#/account";
  };

  //funcion del boton de editar receta
  $scope.editRecipe = function(id_recipe){
    console.log("editarReceta "+id_recipe);
  };

  //funcion del boton de eliminar receta
  $scope.deleteRecipe = function(id_recipe){
    console.log("borrarReceta "+id_recipe);
  };


})
