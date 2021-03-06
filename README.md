![ScreenShot](https://raw.github.com/harryjjacobs/autoslider/master/slider-demo.jpg)

This is a very simple and basic jQuery automatic image slider that slides through a gallery of images. It has no user controls however the speed at which it goes through the images can be changed. It is very simple to use.

It's also tiny-1.5KB!

This plugin requies jQuery.

You must first create a div to use as the gallery and put the images you want to be scrolled through inside;
```html
<div id="gallery">
	<img src="images/banner1.jpg"></img>
	<img src="images/banner2.jpg"></img>
	<img src="images/banner3.jpg"></img>
</div>
```
This is all that is required to turn the div into a scrolling image gallery:
```javascript
$("#gallery").gallery();
```

The gallery function takes the following arguments:

A scrolling interval in milliseconds. By default the interval is 5000 milliseconds (5 seconds):
```javascript
$("#gallery").gallery({interval:10000});
```

The speed at which to slide the images in milliseconds (the default is 500).
```javascript
$("#gallery").gallery({slideSpeed:100});
```

Whether to scale images by height or width in the container
```javascript
$("#gallery").gallery({imageLayout:"height"});
```

Example:
```javascript
$("#gallery").gallery({
	interval:7500,
	imageLayout:"width",
	slideSpeed:700
});
```
