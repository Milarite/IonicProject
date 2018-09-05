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
    var accountAddress= null;
    var privateKey = null;

    this.web3Init = function (_address,_abi, _accountAddress,_privateKey){
        abi = _abi;
        address = _address;
        accountAddress = _accountAddress;
        privateKey = _privateKey;
        
    }
  
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





    this.Web3SmartContract=function(){

        if(web3 == null)
        return null;
        ///// else return contract instance;
        const contract =  web3.eth.contract(abi);
        const instance = contract.at(address);






        return instance;
        

    }

    this.web3GetAccountAddress = function(){
        return accountAddress;
    }


    this.prepareRawTransaction=function(_data,_nonce){
        var tx =new ethereumjs.Tx({ 
            data : _data,
            nonce : _nonce,
            gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
            to : address,
            value : 0,
            gasLimit: 1000000

        });

          tx.sign(ethereumjs.Buffer.Buffer.from(privateKey, 'hex'));
          var raw = '0x' + tx.serialize().toString('hex');

          return raw;

    }

        this.getAccounts=function(){

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
