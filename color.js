var Links = {
  setColor:function(color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //     alist[i].style.color = color;
  //   i = i + 1;
  // }
  $('a').css('color', color);
  }
}

var Body = {
  setColer:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function Night_DayHandler(self){
var target = document.querySelector('body');
if (self.value === 'night') {
Body.SetBackgroundColor('black');
Body.setColer('white');
self.value = 'day';
Links.setColor('powderblue');
}else{
Body.SetBackgroundColor('white');
Body.setColer('black');
self.value = 'night';
Links.setColor('blue');
}}
