export function startThumbnail(){
    
    $(document).ready(function(){
        $(".thumbnails").owlCarousel({
            items: 4,
            loop:true,
            margin:10,
            nav: true,
            navText: ["<",">"],
            responsive:{
                0:{
                    items: 1,
                },
                180:{
                    items: 3,
                },
                480:{
                    items: 4,
                },
                768:{
                    items: 5,
                },
                1080:{
                    items: 6,
                }
            }
        });
    });
    
}
