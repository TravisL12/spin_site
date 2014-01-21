$('#nav a').click(function(e){
    var $targetName = $(this).attr('href').slice(1);
    var $target = $('.cycle, .instruct').find('div[id=' + $targetName + ']');

    var $targetOffset = $target.offset().top;
    $('html,body')
    .animate({
        scrollTop: $targetOffset
    }, 500, "easeOutQuad", function(){
        $target.next('a.back-to-top').hide();
    });
        e.preventDefault();
});

// $('a.back-to-top').click(function(e){
//     var $H1 = $('h1').offset().top;

//     $('html,body')
//     .animate({
//         scrollTop: $H1
//     }, 300, "easeInQuad");
//      e.preventDefault();
// });





// <h1>Smooth scrolling</h1>

// <div id="links">
//      <a href="#link-one">Link one</a>
//      <a href="#link-two">Link two</a>
//      <a href="#link-three">Link three</a>
//      <a href="#link-four">Link four</a>
// </div>

// <div class="content-blocks">
//     <div class="content" id="link-one"> This is the first block <br>(<a class="back-to-top" href="#">Back to top</a>)</div>
//     <div class="content" id="link-two"> This is the second block <br>(<a class="back-to-top" href="#">Back to top</a>)</div>
//     <div class="content" id="link-three"> This is the third block <br>(<a class="back-to-top" href="#">Back to top</a>)</div>
//     <div class="content" id="link-four"> This is the fourth block <br>(<a class="back-to-top" href="#">Back to top</a>)</div>
// </div>
