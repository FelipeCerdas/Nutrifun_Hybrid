app.service('LoginService', function ($state, $rootScope, UtilService) {
      var service = {
        userAuth: function(username_,password_){
          $('#spinner').show();
          $('#inputContainer').hide();
          // $('#loginbtn').hide();
          // $('#regbtn').hide();


          //validar que los datos del usuario no vengan vacios
          if(username_ != "" && password_ != ""){
            //invocacion del servicio de autenticacion de usuario

            //url del servicio de login
            var url_service = "http://nutrifun-nutrifun.rhcloud.com/services/user/login";
            //datos en estructura json, que se enviaran en el data de la estructura de AJAX
            var jsonData = '{"header":{},"body":{"userName":"'+username_+'","password":"'+password_+'"}}';

            //inicio de AJAX
            $.ajax({
              url: url_service,
              type: "POST",
              dataType: "json",
              data: jsonData,
              contentType: "application/json; charset=utf-8",
              success: function(response){
                $('#spinner').hide();
                $('#inputContainer').show();
                $('#loginbtn').show();
                $('#regbtn').show();
                // si el llamado es exitoso se hace lo siguiente:
                // 1 se pregunta si el status es igual a success
                if(response.header.status == "success"){
                  // 2 se carga el usuario y estado de login en la variable global de la app $rootScope
                  $rootScope.user_logged = response.body;
                  $rootScope.login_status = response.header.status;
                  // 3 se notifica Ingreso correcto
                  UtilService.showAlert("Exito","Ingreso Exitoso");
                  // 4 se envia a la pantalla de inicio
                  location.href = "#/tab/dash";
                }else{
                  //en caso de ser fail se notifica al usuario el error
                  UtilService.showAlert("Error","Nombre de usuario o contrasena incorrecta");
                }
              },
              error: function (response) {
                //error interno para control del programador
                console.log(response);
              }
            });
          }else {
            //se notifica al usuario que complete los campos vacios.
            $('#spinner').hide();
            $('#inputContainer').show();
            UtilService.showAlert("Atencion","Debe completar ambos campos");
          }//fin if campos vacios
        }//fin de la funcion
      }//fin variable de servicio
      return service;
});
