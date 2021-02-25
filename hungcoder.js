/* Redirector */
(function(b){window.top.location.href.includes("https://www.bomkhung.com/")||b.filter(function(a){return!a.hasAttribute("imageanchor")&&!a.href.startsWith("https://www.hungcoder.com")&&5<a.href.length}).map(function(a){a.href="https://www.bomkhung.com/url="+encodeURIComponent(a.href);a.target="_blank";a.rel="nofollow noopener"})})(Array.from(document.querySelectorAll(".post-body a")));

// Lazy Load AdSense
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);

function changetargetlink(e){var a=document.getElementsByTagName("a"),t=changetargetlink.arguments;for(var n in a){a[n].target="_blank",a[n].rel="_blank";for(var r=0;r<t.length;r++)a[n].href.match(t[r])&&(a[n].target="",a[n].rel="")}}changetargetlink("www.hungcoder.com"); 
