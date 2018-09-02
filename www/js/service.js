var app=angular.module('starter.services',[]);
app.service("Web3services",function(){
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.service('Web3jsObj',function()
{

    web3 = null;
    var abi = null;
    var address = null;
    this.Web3Facotry=function(url){
        
        if(url)
        {
           web3 =   new Web3(new Web3.providers.HttpProvider(url));
           
        }
        else{
      
           web3=   new Web3(web3.currentProvider);
        }

           return web3;
        
    }

    this.Web3SmartContract=function(address,abi){

        if(web3 == null)
        return null;
        ///// else return contract instance;
        const contract =  web3.eth.contract(abi);
        const instance = contract.at(address);
        return instance;
        

    }

   // this.getAccountTransaction=function(address)

    this.test=function(a){
        console.log(a);
    }

});


// app.service('ContractCommunication', function() {
//     this.myFunc = function (x) {
//         return x.toString(16);
//     }
// });
