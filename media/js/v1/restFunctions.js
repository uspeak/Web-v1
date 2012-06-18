
//Rest Services URL
var urlBase= REST_URL;
// level choosed
var level=1;
// language choosed
// 1= spanish 2 = english
var language = LANGUAGE_ID;
var profile;
var token;


var emailbeta

function getProfile(){
  
  emailbeta = BETA_EMAIL;
    
  var bodyString = '{"Diag":{"id":"'+ currentId +' ","email":"'+ emailbeta +'","diagid":"'+ diagId +'","errors":['+ errors +']}}'
   
  $.ajax({
                    
    type: "POST",
    url: urlBase + 'diagnostics/setDiagBeta2.json',
    data: bodyString,
    contentType: "application/json; charset=utf-8", 
    dataType: "json",
    processData: false,
    success: function (results, text, jq){
      profile = results[0];
      
      
      if (profile == '400'){
        processUserRegister('400');
      }
    },
    error: function (jqXHR, textStatus, errorThrown){
      processUserRegister('500');
    }
  });
  
  
}


function getWords(){
  $.ajax({                      
    url: urlBase + 'diagnostics/getDiagnosticWordsBeta2/' + language +'/' +level+'.json',
    type: "GET",
    dataType: "json",
    success: loadWords,
    error: function(jqXHR, textStatus, errorThrown){
      alert(textStatus, errorThrown)
    }
  });
}


 

function setUser(){
    
  var username = document.getElementById('name').value
  var password = document.getElementById('password').value
  var email = document.getElementById('email').value 

  var bodyString= '{"User":{"username":"' + username + '","password":"' + password + '","email":"' + email + '","profile":' + profile + ',"lang_dir":' + language + ',"points":' + points + '}}'
    
  $.ajax({
                    
    type: "POST",
    url: urlBase + 'user.json',
    data: bodyString,
    contentType: "application/json; charset=utf-8", 
    dataType: "json",
    processData: false,
    success: function (results, text, jq){
            
      var code = results
      
      if (code.length > 4){
        token = results;
        alert('User Created') 
        
      }else {
        processUserRegister(code);
      } 
      
      
    //processUserRegister(code);
    },
    error: function (jqXHR, textStatus, errorThrown){
      processUserRegister('500');
    }
  });

}

function processUserRegister(code){
    
    
  switch (code){
        
    case '201':
      alert('CREATED')
      break;
        
    case '2011':
      alert('existing user')
      break;
      
    case '400':
      alert('Bad Request')
      break;
      
    case '443':
      alert('Duplicated email and Language')   
      break;
      
    case '444':
      alert('Duplicated Username')   
      break;
    case '500':
      alert('Server error')   
      break;
      
    default:
      alert('Bad Request')
      break;
  }
}

//Autentication Methods
 
function getToken() {
               
               
  var email = $('#emailLogin').val()
  var password = $('#passwordLogin').val()
    
    
    $.ajax({
      type: "GET",
      url: urlBase + 'users/token.json',
      dataType: "json",
      processData: false,
      beforeSend : function(req) {
        req.setRequestHeader('Authorization', 
       make_base_auth (email, password));
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {   
                          
        alert('Error de conexion');
                          
      },
     success: getInformationUser
      //   success: updateUser
    });
}


function resetPass(email){
  
  
  var body = '{"User":{"email":"'+email+'"}}'
    
    
  $.ajax({
                    
    type: "POST",
    url: urlBase + 'users/recover.json',
    data: body,
    contentType: "application/json; charset=utf-8", 
    dataType: "json",
    processData: false,
    success: function (results, text, jq){
      alert('Exito')
    },
    error: function (jqXHR, textStatus, errorThrown){
      elert('Error')
    }
  });
  
  
  
  
}

function getInformationUser(results){
  
  token = results
  
  $.ajax({
    type: "GET",
    url: urlBase + 'user.json',
    dataType: "json",
    processData: false,
    beforeSend : function(req) {
      req.setRequestHeader('Authorization', 
        make_base_auth (token));
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {   
                        
      alert('Error');
                        
    },
    success: function(datos, text, jq) {   
                        
      $.each(datos, function(iteracion, element){
                
        alert( "User: "  + element.name + 
          " Email: "   + element.email +
          " Gender: "  + element.gender + 
          " Age: "  + element.age + 
          " Points: "  + element.points  )
        
                
      })
      
      
                        
    }
  });
  
}

function updateUser(){

  var token = "394105838fe3c2f3794126c1378ef623fe0ccab3";
  var bodyString= '{"User":{"username":"cacho1","password":"1","email":"cacho@gmail.com","profile": 5,"lang_dir":1,"points": 999}}'
   
  $.ajax({
    type: "PUT",
    url: urlBase + 'user/recover.json',
    data: bodyString,
    dataType: "json",
    processData: false,
    beforeSend : function(req) {
      req.setRequestHeader('Authorization', 
        make_base_auth (token));
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {   
                        
      alert('Error de conexion');
                        
    },
    success: function(games, text, jq) {   
      alert('Update Success')                
                        
    }
  });
}

function getGames(results){

  var token = results;

  var body = 'Username: ' + token;
  
  $.ajax({
    type: "GET",
    url: urlBase + 'games/getGames/1.json',
    dataType: "json",
    processData: false,
    beforeSend : function(req) {
      req.setRequestHeader('Authorization', 
        make_base_auth (body));
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {   
                        
      alert('Error');
                        
    },
    success: function(games, text, jq) {   
      alert(games)                
    //      $.each(datos, function(iteracion, element){
    //                
    //        alert( "User: "  + element.name + 
    //          " Email: "   + element.email +
    //          " Gender: "  + element.gender + 
    //          " Age: "  + element.age + 
    //          " Points: "  + element.points  )
    //        
    //                
    //      })
      
      
                        
    }
  });
}

function getAutentication() {
               
               
  var username = document.getElementById('username').value
  var password = document.getElementById('user_pass').value
    
  $.ajax({
    type: "GET",
    url: urlBase + 'user.json',
    dataType: "json",
    processData: false,
    beforeSend : function(req) {
      req.setRequestHeader('Authorization', 
        make_base_auth (username, password));
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {   
                        
      alert('Error');
                        
    },
    success:function(results, text, jq){
            
            
      $.each(results, function(iteracion, element){
                
        alert( "ID: "  + element.id +                             
          " User: "   + element.username +
          " Profiled: "   + element.id +
          " Points: "   + element.points );
                
      })
            
    }
  });

}

//Methods Needed to codification

/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/

var Base64 = {

  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
      this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
      this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
  },

  // public method for decoding
  decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }

    }

    output = Base64._utf8_decode(output);

    return output;

  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }

    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }

    return string;
  }

}

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = Base64.encode(tok);
  return "Basic " + hash;
}