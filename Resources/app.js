// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    layout:'vertical'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

var ioio = require('com.glimworm.app.module.ioio');


var b = Ti.UI.createButton({
	title : 'pin1 on'
});
b.addEventListener('click',function() {
	alert(ioio.relay(1,true));
});

var b1 = Ti.UI.createButton({
	title : 'pin1 off'
});
b1.addEventListener('click',function() {
	alert(ioio.relay(1,false));
});
var b2 = Ti.UI.createButton({
	title : 'pin0 on'
});
b2.addEventListener('click',function() {
	alert(ioio.relay(0,true));
});
var b3 = Ti.UI.createButton({
	title : 'pin0 off'
});
b3.addEventListener('click',function() {
	alert(ioio.relay(0,false));
});
win1.add(b);
win1.add(b1);
win1.add(b2);
win1.add(b3);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
