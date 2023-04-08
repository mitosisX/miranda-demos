filemenu = Menu("File");
newfile = MenuItem("New File");
// newfile.setImage(images("menu/newfile.png"));



newwindow = MenuItem("New Window");
sep1 = MenuItem('-')

openfile = MenuItem("Open File");
openfile.setImage(images("menu/openfolder.png"));

openfolder = MenuItem("Open Folder");
openrecent = MenuItem("Open Recent");
sep2 = MenuItem('-');

save = MenuItem("Save");
saveas = MenuItem("Save As");
sep3 = MenuItem('-');

share = MenuItem("Share");
sep4 = MenuItem('-');

autosave = MenuItem("Auto Save");
preferences = Menu("Preferences");

settings = MenuItem("Settings");
themes = Menu("Theme");
light = MenuItem("Light");
dark = MenuItem("Dark");
themes.addMenuItems(light, dark)

preferences.addMenuItems(settings, themes)

sep3 = MenuItem('-');
exit = MenuItem("Exit");

filemenu.addMenuItems(
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
  preferences,
  exit);