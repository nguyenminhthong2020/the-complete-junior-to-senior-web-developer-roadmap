## Critical render path

The client requrie a website, the server return a html file, than the browser starts reading it, as soon as the html arive starts create something call, the DOM(Document Object Model).

The DOM describes the content of the page, but when he start to doing that, encounters style links than he asks for the .css files, next he go again building the structure tree of the website, he also start to build a "css om" that has the style information attach to the tree model, and he goes building till find a javascript tag and request from the server, the javascript file and execute any changes he may want onto to the DOM and the CSS OM, once this is done, the browser combines the DOM and the CSS OM onto a render tree.

Then the browser forget about those files and uses the render tree to build the layout, and paint all those pixels, and at the end of all of that we have the page displaying correctly on the browser.

## About images

This whole process don't cover images, but as soon as the browser see the image he starts to download the image in the background to display it.

### Resume of the path

DOM > CSSOM > (DOMContentLoaded)Render Tree > Layout > Paint(Load)

### Optmize the path

Load CSS as first as possible and JS files late, JavaScript requires html and CSS files ready for his manipulation.

HTML => Load style tag in the <head>
        Load script right befode </body>

CSS => Only load whatever is needed.
       Above the fold loading
       Media attributes (can use in html to only import in certain sizes)
       Less specificity

JS => there are 3 ways to use import js
    normal, when It can block the DOM to execute the script

    script async, when it download in a low priority but cant block the DOM parsing, but we cant control when 
    it gonna execute and this can make some errors, it's good to use when it's a script that dont manipulate de DOM.

    script defer, it will not block the DOM parsing but it gonna wait when the html complete parse and then execute.

    when the core functionality requires javascript, use async
    if the core functionality wont require javascript, use defer

    Others options:
        Minimize dom manipulation
        Avoid long running JavaScript

    Keep in mind browsers works differently