window = Window("Menus and toolbar");
window.setIcon(images("javascript.png"));
window.setSize(400, 300);

toolbar = Toolbar();

malawi = ToolbarButton();
malawi.setTooltip("Develoepd from Malawi");
malawi.setImage(images("malawi.png"));
toolbar.addAction(malawi);

toolbar.addSeparator();

b = ToolbarButton();
b.setTooltip("hey");
b.setImage(images("icons8_send_50px.png"));
b.onClick(function (self) {
  self.setImage(images("icons8_curriculum_50px.png"));
});
b.setCheckable(true);
toolbar.addAction(b);
window.addToolbar(toolbar);

menu = Menubar();

// The menu to beused in the below file.
app.execute(scripts('file.js'))

editMenu = Menu("Edit");
viewMenu = Menu("View");
helpMenu = Menu("Help");

menu.addMenuItem(filemenu)//, editMenu, viewMenu, helpMenu);
// menu.addItems(a, b, c);
window.setMenubar(menu);

window.show();