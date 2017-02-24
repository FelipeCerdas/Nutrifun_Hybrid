app.service('AccountService', function ($state, $q) {

      //variable que se cargara con el objeto de respuesta del servicio
      var object = {};

      //inicio de variable de servicios
      var service = {
        getObject: function(){
          return object;
        },
        getUserById: function(user_id){
          return $q(function(resolve, reject){
            //url del servicio
            var url_service = "http://nutrifun-nutrifun.rhcloud.com/services/user/getUserById";
            //json que se enviara en el data
            var jsonData = '{"header": {},"body": {"idUser": "'+user_id+'"}}';
            // inicio de ajax
            $.ajax({
              url: url_service,
              type: "POST",
              dataType: "json",
              data: jsonData,
              contentType: "application/json; charset=utf-8",
              success: function(response){
                object = response.body;
                console.log(response);
                resolve("success");
              },
              error: function(response){
                reject(response);
              }
            });
        });
      }//fin de la funcion getUserById
    }//fin de la var de servicios
    return service;
});
