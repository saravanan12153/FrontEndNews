// -----------------------------
// *DOCUMENT READY
// ----------------------------

$(document).ready(function(){
    $('.js-like').on('click',function(event){
        event.preventDefault();

        $(this).text('Liked!')
        .closest('.news-item')
        .addClass('<is-l></is-l>iked');
    });

    $('.js-add-link').on('click',function(event){
        event.preventDefault();

        $('.js-form').toggleClass('is-visible');
    });
});