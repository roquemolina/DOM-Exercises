const d = document,
w = window,

$youTubeIFrame = `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
$youTubeLink = `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank">Ver video</a>`,
$gMapsIFrame = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081384!2d2.292292615072259!3d48.858373608662916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses-419!2sar!4v1674183001324!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
$gMapsLink = `<a href="https://www.google.com/maps?ll=48.85837,2.294481&z=16&t=m&hl=es-419&gl=AR&mapclient=embed&cid=10222232094831998944" target="_blank">Ver video</a>`;


export default function responsiveLinks(youTube, gMaps, mq) {
    let $youTube = d.querySelector(youTube),
    $gMaps = d.querySelector(gMaps),
    breakpoint = w.matchMedia(mq);

    function responsive(e) {
        if (e.matches) {
            // Viewport is less or equal to 700 pixels wide
            $youTube.innerHTML =$youTubeLink;
            $gMaps.innerHTML = $gMapsLink;
          } else {
            // Viewport is greater than 700 pixels wide
            $youTube.innerHTML =$youTubeIFrame;
            $gMaps.innerHTML = $gMapsIFrame;
          };
    }
    /*
    const responsive = (e) => {
        console.log(e);
        if (e.matches) {
            // Viewport is less or equal to 700 pixels wide
            $youTube.innerHTML =$youTubeLink;
            console.log(breakpoint);
            $gMaps.innerHTML = $gMapsLink;
          } else {
            // Viewport is greater than 700 pixels wide
            $youTube.innerHTML =$youTubeIFrame;
            $gMaps.innerHTML = $gMapsIFrame;
          };
    };
    */
    
    //breakpoint.addListener(responsive);
    breakpoint.addEventListener('change', responsive);
    responsive(breakpoint);
    };

/*

    
    w.addEventListener('resize', (e) =>{
        if(w.innerWidth < 700){
            $youTube.innerHTML =$youTubeLink;
            $gMaps.innerHTML = $gMapsLink;
        } else {
            $youTube.innerHTML =$youTubeIFrame;
            $gMaps.innerHTML = $gMapsIFrame;
        }
    })
    
};
*/