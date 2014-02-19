var app = angular.module('ctrl.moderator', [  
  'ngTouch',
  'ui.bootstrap',
  'btford.socket-io'
]);

app.controller('ModeratorCtrl', function($scope) {

  $scope.events=[
    { name:'PNW District Champs', value:'orpo' }
  ];

/*
MATCH
{id: Number,
moderated: Boolean, //if true, then the match was moderated already
redAlliance: {team1:Number,team2:Number,team3:Number},
blueAlliance: {team1:Number,team2:Number,team3:Number},
}
  


*/

  $scope.matches = [
    
    {id: 123,moderated: false, redAlliance: {team1:1540,team2:666,team3:4321}, blueAlliance: {team1:1234,team2:678,team3:8756}},
    {id: 13,moderated: false, redAlliance: {team1:140,team2:66,team3:432}, blueAlliance: {team1:124,team2:8,team3:876}},
     
  ];
  
  
  // array that holds every match at event
  // select bar (choose event) w/ ng-options
  // button that ng-click req from server
  

  
});