### Injections SQL

Examples:
' or 1=1 --
'; DROP TABLE users; --

This do:
Ends the actual entrace code, use malicious code, comment any code after it.

Other example on scripts with (innerHTML):

<img src='/' onerror="alert('boom');">

This do:
images are executed when they're found, so the browser will try to found the image, but as expected '/' dont return a image so throw the error on onerror="", executing any script in this place.

correct way:
var textnode = document.createTextNode(input);
p.appendChild(textnode); 

this sanitize everything to text.

deals with injection:
    sanitize input
    parametrize queries
    knex.js or other ORMS