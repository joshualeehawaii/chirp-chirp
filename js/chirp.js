function chirp(n){
  //console.log('sanity check');
  if(n === 1){
    //console.log('chirp');
    return 'chirp';
  }
  console.log('this is n=', n);
  return chirp( --n) + ' ' + 'chirp';
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});