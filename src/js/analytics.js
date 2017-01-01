// --- analytitics.js

var _paq = _paq || [];
_paq.push(["setDomains", ["*.osvaldo.pt"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u = "//analytics.osvaldo.pt/";
  _paq.push(['setTrackerUrl', u + 'piwik.php']);
  _paq.push(['setSiteId', 7]);
  var d = document,
	  g = d.createElement('script'),
	  s = d.getElementsByTagName('script')[0];
  g.type = 'text/javascript';
  g.async = true;
  g.defer = true;
  g.src = u + 'piwik.js';
  s.parentNode.insertBefore(g, s);
})();