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

fileMenu = Menu("File");
newFile = MenuItem("New File");
newFile.setImage(images("menu/newfile.png"));

openFile = MenuItem("Open File");
openFile.setImage(images("menu/openfolder.png"));

sep = MenuItem();
sep.setSeparator(true);

exit = MenuItem("Exit");
exit.setImage(images("menu/exit.png"));

fileMenu.addItems(newFile, sep, openFile, exit);

editMenu = Menu("Edit");
viewMenu = Menu("View");
helpMenu = Menu("Help");

a = MenuItem("File");
b = MenuItem();
b.setSeparator(true);
c = MenuItem("Edit");

menu.addMenuItems(fileMenu, editMenu, viewMenu, helpMenu);
// menu.addItems(a, b, c);
window.setMenubar(menu);

window.show();