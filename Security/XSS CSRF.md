## XSS

It's about inject a piece of code that goes to the database and stick as a comment or post on the page, when that get render execute the code and may get some informations of the victims browser and send to another place.

Session Hijack

## CSRF

It's about to make the victim with a session on a bank for example, clicks on a link that execute a action as a deposit.

sanitize input
don't use eval() or document.write
content security police
secure + httpOnly cookies

there's package csurf