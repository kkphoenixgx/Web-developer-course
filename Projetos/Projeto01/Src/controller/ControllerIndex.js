import { startThumbnail } from "./thumbnail.js";

export default class ControllerIndex{

    constructor(Page){
        this.checkFile(Page)
    }

    checkFile(Page){

        switch(Page){

            case 'Index':

                startThumbnail();
                break;

            case 'Video':

                startThumbnail();
                const video = $("video")[0];

                $(".thumbnails .item").on("click", function(){
                    $("video").attr(
                        {
                            "src" : './view/mp4/' + $(this).data('video') + '.mp4',
                            "poster" : './view/img/' + $(this).data('video') + '.jpg'
                        }
                    );
                });

                // the mouseover is used because when it move, the volume will change instantly 
                $('#volume').on('mousemove', function(){
                    console.log('mousemove')
                    video.volume = parseFloat($(this).val())
                });

                $('#btn-play-pouse').on('click', function(){
                    
                    $(this).add('btn-success')

                    if($(this).hasClass('btn-success')){
                        $(this).text('STOP');
                        video.play();
                    }
                    
                    if($(this).hasClass('btn-danger')){
                        $(this).text('PLAY');
                        video.pause();
                    }

                    $(this).toggleClass('btn-success btn-danger');
                    
                })
                break;
        }

    }
} 