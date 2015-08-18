function init(){
  
  require('shelljs/global');
  
  if (!which('git')) {  
    echo('Sorry, this script requires git');  
    exit(1);
  }
  
  var clone = 'git clone --depth=1 https://github.com/moajs/nmm-tmpl'
  // Run external tool synchronously
  if (exec(clone).code !== 0) {
    echo('Error: nmm clone failed');
    exit(1);
  }else{
    echo('Success: nmm clone finished!');
  }
  
  var clone_post = 'rm -rf nmm-tmpl/.git && cp -rf nmm-tmpl/* . && rm -rf nmm-tmpl';
  if (exec(clone_post).code !== 0) {
    echo('Error: nmm clone_post failed');
    exit(1);
  }else{
    echo('Success: nmm clone_post finished!');
  }
  
}


module.exports = init;
