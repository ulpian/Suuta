// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    title: 'Tab 1',
    backgroundColor: '#fff'
});
var tab1 = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Tab 1',
    window: win1
});

var button = Titanium.UI.createButton({
    color: '#999',
    title: 'Show Modal Window',
    width: 180,
    height: 35
});

win1.add(button);
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
        title: 'Click For Nav Group',
        width: 180,
        height: 35
    });
    tabWin.add(tBtn);
    tBtn.addEventListener('click',
    function(e) {
        var navWin = Titanium.UI.createWindow({
            title: 'Nav Window',
            backgroundColor: '#f00',
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
    title: 'Tab 2',
    backgroundColor: '#fff'
});
var tab2 = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Tab 2',
    window: win2
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);


// open tab group
tabGroup.open();
