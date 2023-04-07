window = Window();
window.setSize(500, 500);
window.setIcon(images("calc.png"));

dock = Dock();
b = Button("Click me");
b.onClick(function () {
  const content = app.readFile("D:/PyQt/a.txt");
  app.aPopup(window, "TItle", content);
});

dock.setMagneticAreas(['top', 'bottom', 'left'])
dock.setChild(b);
window.addDock(dock);
window.show();
