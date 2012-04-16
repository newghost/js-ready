/*
* Description: Check a object, when it's avaiable exec the function, etc:
  $ready("CompanyNamespace.Package.FunctionName", function(){ 
      //do something with CompanyNamespace.Package.FunctionName;
  });
* Author: Kris Zhang
* Blog: http://c52u.com
*/


(function(window){

  window.$ready = function(tag, func) {
    var syncId, count = 200,
        tagAry = tag.split('.'), len = tagAry.length;

    var verify = function(){
      var i = 0, obj = window;

      do {
        obj = obj[tagAry[i]]
        if(!obj) return false;
      } while(++i < len);

      func();
      return true;
    };

    !verify() && (syncId = window.setInterval(function() {
      if (verify() || !count--) {
        window.clearInterval(syncId);
      }
    }, 150));

  };

})(window);