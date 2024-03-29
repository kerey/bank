const links = [
    { id: '#banner', active: true },
    { id: '#beginning', active: true },
    { id: '#section-2', action: true },
    { id: '#section-3', action: true },
    { id: '#section-4', action: true },
    { id: '#section-5', action: true },
    { id: '#section-6', action: true },
    { id: '#section-7', action: true },
    { id: '#section-8', action: true },
];
const characters = [
    {id: 1, name: 'Name'}
];

function onCollapse(el){
    if (el.hasClass('collapse')) {
        el.removeClass('collapse');
    } else {
        el.addClass('collapse')
    }
}

$( document ).ready(function() {
    $("body").append("<div id='tooltip'></div>");
    $('#characters .character').hover(
        function(){
            const img = $(this).find('img');
            const src = img.attr('src').replace('.svg', '-red.svg');
            img.attr('src', src);
        },
        function(){
            const img = $(this).find('img');
            const src = img.attr('src').replace('-red', '');
            img.attr('src', src);
        }
    );

    $('#lang').on('click',function() {
        onCollapse($(this));
    });
    $('#socials').on('click', function(){
        onCollapse($(this));
    });
});

$(window).scroll(function(){
    const scrollTop = $(this).scrollTop();
    links.map(link => {
        const top = $(link.id).offset().top;
        const height = $(link.id).height();
        const bottom = top + height;
        const element = $('#sidebar a[href="'+link.id+'"] .btn-section');
        if (scrollTop - top  > -80 && bottom - scrollTop > 80) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    });
});

function copyLink() {
    const copyText = document.getElementById('site-link');
    copyText.select();
    document.execCommand('copy');
}
