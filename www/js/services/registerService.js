app.service('RegisterService', function ($state, $rootScope, UtilService) {
      var service = {
        registerUser: function(user){
          $('#spinner2').show();
          $('#registerbtn').hide();

          //codigo que guardara al usuario!
          //url del servicio
          var url_service = "http://nutrifun-nutrifun.rhcloud.com/services/user/addUser";
          //trama de json
          var jsonData = '{ "header":{}, "body":{ "idUser": null, "userName":"'+user.username+'", "name":"'+user.name+'", "lastName":"'+user.lastname+'", "email":"'+user.email+'", "password":"'+user.password+'" }}';
          //inicio de ajax
          $.ajax({
            url: url_service,
            type: "POST",
            dataType: "json",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            success: function(response){
              //preguntar si si el status del response es success para notificar un registro correcto.
              if(response.header.status == "success"){
                $('#spinner2').hide();
                UtilService.showAlert("Exito","Usuario Guardado Correctamente");
                window.history.back();
              }else{
                $('#spinner2').hide();
                $('#registerbtn').show();
                UtilService.showAlert("Exito","El nombre de usuario no esta disponible");
              }
            },
            error: function(response){console.log(response);}
          });

        }

      }
      return service;
});
