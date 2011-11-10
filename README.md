TWITTER BOOTSTRAP - in SASS
=================

Bootstrap is Twitter's toolkit for kickstarting CSS for websites, apps, and more. It includes base CSS styles for typography, forms, buttons, tables, grids, navigation, alerts, and more. I have forked their original project which can be found at http://twitter.github.com/bootstrap! and reworked it into SASS. I don't have anything against LESS but I am currently using SASS in so many projects that it seemed sensible to port this over so that I could use the components separately.

I have also modified many of the form class names and style approach to be more compatible with 
<a href="http://github.com/plataformatec/simple_form">simple_form</a>. This means that form errors now relate to 
the normal rails field_with_errors class but also that the error message that simple_form generates in it's
error span is also styled up seamlessly.

I have added a hint class to provide a bubble beside the field to contain the hint and a javascript file called dynamic_hints.js to show the hints automatically on focus of the field. This requires that a document ready method
for the form something like this:
$(document).ready(function(){
   new DynamicHints($('form'));
});


Usage
-----

You can use this port of the Twitter Bootstrap in one of two ways: just drop the compiled CSS into any new project or if you are already using SASS just include the SASS files on a case by case basis into your project. The files are named in a fairly self explanatory way so it should be pretty simple to work out what you need. 


``` html
<link rel="stylesheet" type="text/css" href="bootstrap.css">
```

For more info, refer to the docs!