app.service('ChatsService', function ($ionicPopup) {
    return {
      getChats: function(){
        // Some fake testing data
        var chats = [{
          id: 0,
          name: 'Ben Sparrow',
          lastText: 'You on your way?',
          face: 'img/ben.png'
        }, {
          id: 1,
          name: 'Max Lynx',
          lastText: 'Hey, it\'s me',
          face: 'img/max.png'
        }, {
          id: 2,
          name: 'Adam Bradleyson',
          lastText: 'I should buy a boat',
          face: 'img/adam.jpg'
        }, {
          id: 3,
          name: 'Perry Governor',
          lastText: 'Look at my mukluks!',
          face: 'img/perry.png'
        }, {
          id: 4,
          name: 'Mike Harrington',
          lastText: 'This is wicked good ice cream.',
          face: 'img/mike.png'
        }];
        return chats;
      },
      showAlert: function (title, message) {
        var alertPopup = $ionicPopup.alert({
          title: title,
          template: message
        });

        alertPopup.then(function (res) {
          //console.log('Thank you for not eating my delicious ice cream cone');
        });
      },
      showConfirmAlert: function(title, message){
         return $ionicPopup.confirm({
           title: title,
           template: message
         });
      }
    }
  });
