app.service('LoginService', function ($state, $rootScope, $http) {
      var service = {
        userAuth: function(username_,password_){

          //tramas de prueba
          var data = {
            userName:"1",
            password:"1"
          };

          if(username_ == data.userName && password_ == data.password){
            //usuario existe
            return service = true;
          }else{
            return service = false;
          }


          // var url_ = "http://nutrifun-nutrifun.rhcloud.com/services/user/login";
          // var url_2 = "https://jsonplaceholder.typicode.com/posts";
          // var jsonData = '{"header":{},"body":{"userName":"pipe","password":"12345"}}';
          // var jsonData2 = '{}'
          //
          // $http({
          //     method: 'POST',
          //     url: url_,
          //     data: jsonData,
          //     dataType : 'json',
          //     headers: {'Content-Type': 'application/json'}
          // }).then(function successCallback(response){
          // console.log(response);
          // }, function errorCallback(response){
          // console.log(response);
          // });
          // $.ajax({
          //     url: url_2,
          //     type: "POST",
          //     dataType: "json",
          //     data: jsonData,
          //     contentType: "application/json",
          //     success: function(response){
          //       console.log(response);
          //     },
          //     error: function(response){
          //       console.log(response);
          //     }
          // });

          // var object_ = {
          //   userName : username_,
          //   password : password_
          // };
          //
          // var object_2 = {
          //   header : {},
          //   body : {
          //     userName : username_,
          //     password : password_
          //   }
          // };
          //
          // $.ajax({
          //   url: url_,
          //   type: "POST",
          //   dataType: "json", // expected format for response
          //   // contentType: "application/json", // send as JSON
          //   data: JSON.stringify(object_2),
          //
          //   complete: function(response) {
          //     //called when complete
          //     console.log(response);
          //   },
          //
          //   success: function(response) {
          //     //called when successful
          //     console.log(response);
          //  },
          //
          //   error: function(response) {
          //     //called when there is an error
          //     console.log(response);
          //   },
          // });

          // var request_ = '{header:{},body:{userName:"pipe",password:"12345"}}';
          // $.ajax({
          //   url:url_,
          //   type:"POST",
          //   data: request_,
          //   dataType: "json",
          //   contentType: "application/json, charset=utf-8",
          //   success:function(data){
          //     console.log(data);
          //   }
          // });

          // console.log(data_);

          // $.ajax({
          //   url: url_,
          //   type: "POST",
          //   dataType: "json", // expected format for response
          //   contentType: "application/json", // send as JSON
          //   data: $.param( $({header:{},body:{userName:"pipe",password:"12345"}}) ),
          //
          //   complete: function() {
          //     //called when complete
          //   },
          //
          //   success: function() {
          //     //called when successful
          //  },
          //
          //   error: function() {
          //     //called when there is an error
          //   },
          // });
          // $.ajax({
          //     type: 'POST',
          //     url: url_,
          //     // contentType: 'application/json; charset=utf-8',
          //     dataType: 'json',
          //     data: JSON.stringify(data_5),
          //     success: function(data){
          //       console.log(data);
          //     }
          // });


          //
          // $.ajax({
          //     url: 'http://nutrifun-nutrifun.rhcloud.com/services/user/login',
          //     type: 'POST',
          //     data : {
          //       "header":{},
          //       "body":{
          //         "userName":"pipe",
          //         "password":"12345"
          //       }
          //     },
          //     // headers: {'Content-Type':'application/json'},
          //     dataType: 'json',
          //     success: function (data) {
          //         console.log(data);
          //     }
          // });
          //
          // $http.post(link_, data_).then(function(res){
          //    console.log(res.data);
          // });

          // $http({
          //     method: 'POST',
          //     url: url_,
          //     data: { userName: 'pipe', password: '12345' },
          //     dataType : 'json',
          //     headers: {'Content-Type': 'application/json'}
          // }).then(function successCallback(response){
          //
          // }, function errorCallback(response){
          //
          // });







        }//fin de la funcion
      }//fin variable de servicio
      return service;
});
