

var view01 = Titanium.UI.createImageView({
	image:"graphics/bak.png",
	height:"140%",
	width:"140%",
	top:0
});

var view02 = Titanium.UI.createImageView({
	image:"graphics/bigu_big.png",
	height:231,  
	width:125,
	top:160,
})




// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    title: 'My suuta',
    backgroundColor: '#fff'
});
var tab1 = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Suuta',
    window: win1
});

var button = Titanium.UI.createButton({
    color: '#999',
    title: 'Feed with tweets',
    width: 180,
    height: 35,
    top:10
}); 

var button2 = Titanium.UI.createButton({
    color: '#999',
    title: 'Feed with posts',
    width: 180,
    height: 35,
    top:55
}); 
 
var button3 = Titanium.UI.createButton({
    color: '#999',
    title: 'Feed with credit',
    width: 180,
    height: 35,
    top:110
}); 

win1.add(view01);
win1.add(view02);
button.addEventListener('click',
function(e) {

    var tabWin = Titanium.UI.createWindow({
        title: 'Modal Window',
        backgroundColor: '#f0f',
        width: '100%',
        height: '100%',
        tabBarHidden: true
    });

    var tabGroup = Titanium.UI.createTabGroup({
        bottom: -500,
        width: '100%',
        height: '100%'
    });
    var tab1 = Titanium.UI.createTab({
        icon: 'KS_nav_views.png',
        width: '100%',
        height: '100%',
        title: 'tabWin',
        window: tabWin
    });
    tabGroup.addTab(tab1);
    tabGroup.open();

    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    tabWin.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        tabGroup.animate({
            duration: 400,
            bottom: -500
        },
        function() {
            tabGroup.close()
        });
    });



    var tBtn = Titanium.UI.createButton({
        title: 'Feed your suuta',
        width: 180,
        height: 35
    });
    tabWin.add(tBtn);
    tBtn.addEventListener('click',
    function(e) {
        var navWin = Titanium.UI.createWindow({
            title: 'Feed my suta',
            backgroundColor: '#000000',
            width: '100%',
            height: '100%'
        });
        tab1.open(navWin);
    });


    tabGroup.animate({
        duration: 400,
        bottom: 0
    });
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
    title: 'Feed', 
    backgroundColor: '#fff'
});
var tab2 = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Feed',
    window: win2
});

//
//  add tabs
//

win2.add(button);
win2.add(button2);
win2.add(button3);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);


// open tab group
tabGroup.open();




