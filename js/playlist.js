var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'uPHQb5JBppY',
    playerVars: {
      color: 'white',
      showinfo: 0,
      rel: 0,
      enablejsapi: 1,
      modestbranding: 1,
      showinfo: 0,
      ecver: 2,
    },
    events: {
      onStateChange: onPlayerStateChange,
      onReady: function () {
        $('.ytp-expand-pause-overlay .ytp-pause-overlay').css(
          'display',
          'none'
        );
        $('.video-thumb').click(function () {
          console.log('clicked');
          var $this = $(this);
          if (!$this.hasClass('active')) {
            player.loadVideoById($this.attr('data-video'));
            $('.video-thumb').removeClass('active');
            $this.addClass('active');
          }
        });
      },
    },
  });
  function onPlayerStateChange(e) {
    console.log('state');
    if (e.data == YT.PlayerState.ENDED) {
      document.getElementById('playerWrap').classList.add('shown');
    }
  }
  document.getElementById('playerWrap').addEventListener('click', function () {
    player.seekTo(0);
    document.getElementById('playerWrap').classList.remove('shown');
  });
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function (response) {
      return true;
  }).catch(function (e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}
(function ($) {
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
      autoplay: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 5,
        },
      },
    });
  });
})(jQuery);
