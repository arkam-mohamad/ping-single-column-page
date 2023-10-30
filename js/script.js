$('button').click(function (e) { 
  e.preventDefault();
  if(isEmail($('#email').val()) == false){
    $('.email').addClass('hidden');
  } else {
    $('.email').removeClass('hidden');
  }
});


function isEmail(mail){
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(!regex.test(mail)){
    return false
  } else {
    return true
  }
}