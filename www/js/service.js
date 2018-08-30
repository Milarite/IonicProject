var app=angular.module('starter.services',[]);
app.service("Web3services",function(){
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
var app = angular.module('starter.services', []);
app.service('Web3jsObj',function()
{

    this.Web3Facotry=function(url){
        if(url)
        {
           return  new Web3(new Web3.providers.HttpProvider(url));
        }
      
           return   new Web3(web3.currentProvider);
        
    }

    this.test=function(a){
        console.log(a);
    }

});
// app.service('ContractCommunication', function() {
//     this.myFunc = function (x) {
//         return x.toString(16);
//     }
// });
