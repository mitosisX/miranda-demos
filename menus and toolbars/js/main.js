window = Window("Menus and toolbar- MirandaJS");
window.setIcon(images("javascript.png"));
window.setSize(400, 300);

toolbar = Toolbar();

malawi = ToolbarButton();
malawi.setTooltip("Developed in Malawi");
malawi.setImage(images("malawi.png"));
toolbar.addAction(malawi);

toolbar.addSeparator();

b = ToolbarButton();
b.setTooltip("My Continent");
b.setImage(images("africa1.png"));
b.onClick(function (self) {
  self.setImage(images("africa2.png"));
});
b.setCheckable(true);
toolbar.addAction(b);
window.addToolbar(toolbar);

menu = Menubar();

// The menu to beused in the below file.
app.execute(scripts('file.js'))
app.execute(scripts('edit.js'))

editMenu = Menu("Edit");
viewMenu = Menu("View");
helpMenu = Menu("Help");

menu.addMenuItems(filemenu, editmenu)//, editMenu, viewMenu, helpMenu);
// menu.addItems(a, b, c);
window.setMenubar(menu);

window.show();