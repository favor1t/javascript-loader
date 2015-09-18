## Javascript Loader ##
### One `<script>` to load them all! ###
**Javascript Loader** lets you asynchronously load all of your local js files through a single `<script>` tag.  All you have to do is pass along the name of the file(s) you want to load like this:

```
<script type="text/javascript" src="js-loader.js?jquery|thickbox|mootools|shadowbox|lib|ajax"></script>
```

This page will automatically load `jquery.js`, `thickbox.js`, `mootools.js` and so forth, provided they're all stored in the same directory.

You can rename the file to anything you want to and it will still work- init.js, all.js, etc.  Then you can have a nice single line of code that looks like:
```
<script type="text/javascript" src="init.js?jquery|thickbox|jquery.scroller"></script>
```

Alternately, you can use the JSLoader object to load multiple scripts, if that floats your boat.  That looks like this:
```
<script type="text/javascript">	
JSLoader.load("jquery","thickbox","jquery.scroller");
</script>
```

Like the previous example, the ".js" extension is automatically appended to whatever is passed along.

### Caveats ###

Files are loaded asynchronously, so be wary of loading scripts that are dependent on other scripts being loaded first.  For example, if you're loading a jQuery plugin, you'll want to make sure that the jQuery library is loaded first.  A smart implementation might look like this:

```
/* Load the jQuery library first */
<script type="text/javascript" src="jquery.js"></script>

/* Now we can asynchronously load the plugins */
<script type="text/javascript" src="js-loader.js?jquery.scroller|jquery.hotkeys|jquery.ui"></script>
```

**No frameworks required.  Currently tested on Firefox 3+, Chrome 4+, Safari 3+ and IE7+.**

It's fairly straightforward, but I'll make example files if people request them.