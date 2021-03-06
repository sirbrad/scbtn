(function(){
  var params = (function () {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }());

  var username    = params['username'].toLowerCase(),
       isLarge    = (!!params['large'] && params['large'].indexOf('true') >= 0) ? true : false,
       isInverted = (!!params['invert'] && params['invert'].indexOf('true') >= 0) ? true : false,
       wrapper    = document.getElementById('sc-wrapper'),
       btn        = document.getElementById('sc-btn'),
       txt        = document.getElementById('sc-txt');

  // Update btn url
  btn.href = "https://snapchat.com/add/" + username;
  btn.setAttribute('title', 'Add '+username+' on Snapchat')


  if (isLarge) {
    wrapper.className += ' sc-btn--large';
  }

  if (isInverted) {
    wrapper.className += ' sc-btn--invert';
  }

  // Update username text
  txt.innerHTML = username 

}());
