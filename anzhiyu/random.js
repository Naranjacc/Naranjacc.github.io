var posts=["2026/06/21/cloudflare-pages-dns/","2026/07/31/ad-electrical-grid-types-lt317-component-selection/","2026/07/29/pcb-high-current-solder-mask-opening/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };