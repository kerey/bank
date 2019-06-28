const links = [
    { id: '#banner', active: true },
    { id: '#beginning', active: true },
    { id: '#section-2', action: true },
];

$( document ).ready(function() {

});

$(window).scroll(function(){
    const scrollTop = $(this).scrollTop();
    links.map(link => {
        const top = $(link.id).offset().top;
        const height = $(link.id).height();
        const bottom = top + height;
        const element = $('#sidebar a[href="'+link.id+'"] .btn-section');
        if (scrollTop >= top && scrollTop < bottom) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    });
});
