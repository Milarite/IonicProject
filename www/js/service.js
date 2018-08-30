var app=angular.module('starter.services',[]);
app.service("Web3services",function(){
    this.myFunc = function (x) {
        return x.toString(16);
    }
});