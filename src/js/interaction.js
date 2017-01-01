// --- interaction.js

$("#btcontacto").click(function() {
	
    $("#contentBox").load("contacto-inc.html");

    if (typeof(_paq) === "object") {
        _paq.push(['trackEvent', 'Contact', 'Click', 'Contact']);
    }

});

if (document.location.hash == "#contacto") {
	
    $("#contentBox").load("contacto-inc.html");

    if (typeof(_paq) === "object") {
        _paq.push(['trackEvent', 'Contact', 'Hash', 'Contact']);
    }

}

