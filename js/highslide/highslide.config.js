hs.showCredits = false;
hs.graphicsDir = 'js/highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.outlineType = 'rounded-white';
hs.fadeInOut = true;
hs.numberPosition = 'caption';
hs.dimmingOpacity = 0.75;

// Add the controlbar
if (hs.addSlideshow) hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		opacity: .75,
		position: 'bottom center',
		hideOnMouseOut: true
	}
});

function hsimg(handle){
	return hs.expand(handle)
}

function hsvideo(handle){
return hs.htmlExpand(handle, {objectType: 'iframe', width: 450, height: 350, allowSizeReduction: false, wrapperClassName: 'dark borderless-html no-footer', preserveContent: false, objectLoadTime: 'after'});
}
