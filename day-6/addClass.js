$(document).ready(function(){
  $('div.poem-stanza').addClass('hightlight')
})

function addCustomClass() {
  $('h2').addClass('hightlight')
}

$(document).ready(addCustomClass);

$(document).ready(function(){
  console.log('Hello')
  console.log(52)
  console.log($('div.poem-stanza'))
})
