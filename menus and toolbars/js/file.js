filemenu = Menu("File");
newfile = MenuItem("New Text File");
newfile.setImage(images("menu/newfile.png"));

newwindow = MenuItem("New Window");
sep1 = MenuItem()
sep1.setSeparator(true);

openfile = MenuItem("Open File");
openfile.setImage(images("menu/openfolder.png"));

openfolder = MenuItem("Open Folder");
openrecent = MenuItem("Open Recent");
sep2 = MenuItem();
sep2.setSeparator(true);

save = MenuItem("Save");
saveas = MenuItem("Save As");
sep3 = MenuItem();
sep3.setSeparator(true);

share = MenuItem("Share");
sep4 = MenuItem();
sep4.setSeparator(true);

autosave = MenuItem("Auto Save");
preference = MenuItem("Preference");

settings = MenuItem("Settings");
theme = MenuItem("Theme");

// preference.addSubmenus(settings, theme)

sep3 = MenuItem();
sep3.setSeparator(true);
exit = MenuItem("Exit");


filemenu.addItems(
  newfile,
  newwindow,
  sep1,
  openfile,
  openfolder,
  openrecent,
  sep2,
  save,
  saveas,
  sep3,
  share,
  sep4,
  autosave,
  preference,
  exit);