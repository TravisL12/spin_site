$('li#nav a').click(function(e){
    var $targetName = $(this).attr('href').slice(1);
    var $target = $('div').find('div[id=' + $targetName + ']');
    var $targetOffset = $target.offset().top;

    $('html,body')
    .animate({
        scrollTop: $targetOffset
    }, 500, "easeOutQuad", function(){
        $target.next('a.back-to-top').hide();
    });
    e.preventDefault();
});
