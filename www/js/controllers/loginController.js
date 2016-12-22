app.controller('LoginCtrl', function($scope, LoginService) {

    $('#spinner').hide();

    //variable objeto user que que actualiza sus atributos al llenar el form
    $scope.user = {
      username: '',
      password: ''
    };

    //funcion que se encarga de realizar el proceso de login
    $scope.login = function(){
      LoginService.userAuth($scope.user.username, $scope.user.password);
    };

    //funcion que se encargar de enviar al usuario a la pantalla de registro
    $scope.register = function(){
      location.href = "#/register";
    };



});
