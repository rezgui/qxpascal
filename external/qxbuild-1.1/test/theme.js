// [Application]
qx.Class.define("custom.Application",
{
  extend : qx.application.Standalone,

  members :
  {
    // ========================================================================
    // [Entry point]
    // ========================================================================

    main: function()
    {
      // [SuperClass]
      this.base(arguments);

      // [Main Container]
      this._container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
      this.getRoot().add( this._container, {edge: 0});

      // [Tab View]
      this._tabView = new qx.ui.tabview.TabView();
      this._container.add(this._tabView, {edge: 0});

      var pages = [
        { func: "makeFormView", title: "Forms" },
        { func: "makeOtherView", title: "Other" },
        { func: "makeGenericView", title: "Generic 1" },
        { func: "makeGenericView", title: "Generic 2" },
        { func: "makeGenericView", title: "Generic 3" },
        { func: "makeGenericView", title: "Generic 4" }
      ];

      for (var i = 0; i < pages.length; i++)
      {
        var page = new qx.ui.tabview.Page(pages[i].title);
        this[pages[i].func](page)
        this._tabView.add(page);
      }
    },

    // ========================================================================
    // [Form View]
    // ========================================================================

    makeFormView: function(parent)
    {
      parent.setLayout(new qx.ui.layout.Grid(1, 1));

      var widget;
      var group;

      // ----------------------------------------------------------------------
      // [MenuBar + ToolBar]
      // ----------------------------------------------------------------------

      group = this.groupCreate("MenuBar + ToolBar");
      group.getLayout().setColumnFlex(0, 1);
      group.getLayout().setColumnFlex(1, 0);
      parent.add(group, { row: 0, column: 0, colSpan: 4 });

      widget = new qx.ui.menubar.MenuBar();
      this.addSomeMenuItems(widget);
      this.groupAdd(group, null, widget);

      widget = new qx.ui.toolbar.ToolBar();
      this.addSomeToolItems(widget);
      this.groupAdd(group, null, widget);

      // ----------------------------------------------------------------------
      // [Button + ToggleButton]
      // ----------------------------------------------------------------------

      group = this.groupCreate("Button + ToggleButton");
      parent.add(group, { row: 1, column: 0 });

      widget = new qx.ui.form.Button("Click 1");
      this.groupAdd(group, "Button (enabled):", widget)

      widget = new qx.ui.form.Button("Click 2");
      widget.setEnabled(false);
      this.groupAdd(group, "Button (disabled):", widget)

      widget = new qx.ui.form.ToggleButton("Toggle 1");
      this.groupAdd(group, "Toggle (enabled):", widget)

      widget = new qx.ui.form.ToggleButton("Toggle 2");
      widget.setEnabled(false);
      this.groupAdd(group, "Toggle (disabled):", widget)

      // ----------------------------------------------------------------------
      // [RadioBox + CheckBox]
      // ----------------------------------------------------------------------

      group = this.groupCreate("RadioButton + CheckBox");
      parent.add(group, { row: 1, column: 1 });

      widget = new qx.ui.form.CheckBox("Check 1");
      this.groupAdd(group, "CheckBox (enabled):", widget)

      widget = new qx.ui.form.CheckBox("Check 2");
      this.groupAdd(group, "CheckBox (enabled):", widget)

      widget = new qx.ui.form.CheckBox("Check 3");
      widget.setEnabled(false);
      this.groupAdd(group, "CheckBox (disabled):", widget)

      var radiogroup = new qx.ui.form.RadioGroup();

      widget = new qx.ui.form.RadioButton("Select 1");
      widget.setGroup(radiogroup);
      this.groupAdd(group, "RadioButton (enabled):", widget)

      widget = new qx.ui.form.RadioButton("Select 2");
      widget.setGroup(radiogroup);
      this.groupAdd(group, "RadioButton (enabled):", widget)

      widget = new qx.ui.form.RadioButton("Select 3");
      widget.setGroup(radiogroup);
      widget.setEnabled(false);
      this.groupAdd(group, "RadioButton (disabled):", widget)

      // ----------------------------------------------------------------------
      // [TextField + ComboBox]
      // ----------------------------------------------------------------------

      group = this.groupCreate("TextField + ComboBox");
      parent.add(group, { row: 1, column: 2 });

      widget = new qx.ui.form.TextField();
      widget.setValue("Editable text...");
      this.groupAdd(group, "Text Field (enabled):", widget);

      widget = new qx.ui.form.TextField();
      widget.setValue("Disabled text...");
      widget.setEnabled(false);
      this.groupAdd(group, "Text Field (disabled):", widget);

      widget = new qx.ui.form.ComboBox();
      widget.setValue("Item #10");
      this.addSomeListItems(widget);
      this.groupAdd(group, "ComboBox (enabled):", widget);

      widget = new qx.ui.form.ComboBox();
      widget.setValue("Disabled");
      widget.setEnabled(false);
      this.addSomeListItems(widget);
      this.groupAdd(group, "ComboBox (disabled):", widget);

      // ----------------------------------------------------------------------
      // [TextArea]
      // ----------------------------------------------------------------------

      group = this.groupCreate("Text Area");
      group.getLayout().setColumnFlex(0, 1);
      group.getLayout().setRowFlex(1, 1);
      parent.add(group, { row: 1, column: 3 });

      widget = new qx.ui.basic.Label("Write text here:");
      this.groupAdd(group, null, widget);

      widget = new qx.ui.form.TextArea();
      widget.setValue("Editable multi-line text...\nLine 2...\nLine 3...");
      this.groupAdd(group, null, widget);

      // ----------------------------------------------------------------------
      // [List]
      // ----------------------------------------------------------------------

      group = this.groupCreate("List");
      group.getLayout().setColumnFlex(0, 1);
      group.getLayout().setRowFlex(1, 1);
      parent.add(group, { row: 2, column: 0 });

      widget = new qx.ui.form.List();
      widget.setMaxHeight(170);
      this.addSomeListItems(widget);
      this.groupAdd(group, null, widget);

      // ----------------------------------------------------------------------
      // [Tree]
      // ----------------------------------------------------------------------

      group = this.groupCreate("Tree");
      group.getLayout().setColumnFlex(0, 1);
      group.getLayout().setRowFlex(1, 1);
      parent.add(group, { row: 2, column: 1 });

      widget = new qx.ui.tree.Tree();
      widget.setMaxHeight(170);
      this.addSomeTreeItems(widget);
      this.groupAdd(group, null, widget);

      // ----------------------------------------------------------------------
      // [Spinner + DateField + ToolTip]
      // ----------------------------------------------------------------------

      group = this.groupCreate("Spinner + DateField + ToolTip");
      parent.add(group, { row: 2, column: 2 });

      widget = new qx.ui.form.Spinner();
      widget.setValue(0);
      this.groupAdd(group, "Spinner (enabled):", widget);

      widget = new qx.ui.form.Spinner();
      widget.setEnabled(false);
      this.groupAdd(group, "Spinner (disabled):", widget);

      widget = new qx.ui.form.DateField();
      this.groupAdd(group, "DateField (enabled):", widget);

      widget = new qx.ui.form.DateField();
      widget.setEnabled(false);
      this.groupAdd(group, "DateField (disabled):", widget);

      widget = new qx.ui.form.Button("Hover me");
      widget.setToolTip(new qx.ui.tooltip.ToolTip("This is ToolTip."));
      this.groupAdd(group, "ToolTip:", widget);

      // ----------------------------------------------------------------------
      // [DateChooser]
      // ----------------------------------------------------------------------

      group = this.groupCreate("DateChooser");
      group.getLayout().setColumnFlex(0, 1);
      group.getLayout().setRowFlex(1, 1);
      parent.add(group, { row: 2, column: 3 });

      widget = new qx.ui.control.DateChooser();
      this.groupAdd(group, null, widget);

      // ----------------------------------------------------------------------
      // [Desktop]
      // ----------------------------------------------------------------------

      group = this.groupCreate("Desktop");
      parent.add(group, { row: 3, column: 0, colSpan: 2 });

      var wm = new qx.ui.window.Manager();
      var desktop = new qx.ui.window.Desktop(wm);
      this.groupAdd(group, null, desktop);

      var winDefs = [
        [5, 5, 170, 100],
        [50, 35, 260, 80]
      ];

      for (var i = 0; i < winDefs.length; i++)
      {
        var def = winDefs[i];
        var win = new qx.ui.window.Window("Window #" + (i+1)).set({
          icon: "./icons/root.png",
          width: def[2],
          height: def[3],
          showClose : true,
          showMinimize : true
        });
        win.moveTo(def[0], def[1]);

        desktop.add(win);
        win.open();
      }

      // ----------------------------------------------------------------------
      // [Table]
      // ----------------------------------------------------------------------

      group = this.groupCreate("Table");
      group.getLayout().setColumnFlex(0, 1);
      group.getLayout().setRowFlex(0, 1);
      parent.add(group, { row: 3, column: 2, colSpan: 2 });

      widget = this.createTable();
      widget.setMaxHeight(120);
      this.groupAdd(group, null, widget);
    },

    addSomeMenuItems: function(widget)
    {
      var menu;
      var button;

      menu = new qx.ui.menu.Menu();
      menu.add(new qx.ui.menu.Button("New"));
      menu.add(new qx.ui.menu.Button("Open"));
      menu.add(new qx.ui.menu.Button("Close"));
      menu.add(new qx.ui.menu.Button("Save"));
      menu.add(new qx.ui.menu.Button("Save as..."));
      menu.addSeparator();
      menu.add(new qx.ui.menu.Button("Exit"));

      button = new qx.ui.menubar.Button("File");
      button.setMenu(menu);
      widget.add(button);

      menu = new qx.ui.menu.Menu();
      menu.add(new qx.ui.menu.Button("Copy"));
      menu.add(new qx.ui.menu.Button("Paste"));

      button = new qx.ui.menubar.Button("Edit");
      button.setMenu(menu);
      widget.add(button);

      menu = new qx.ui.menu.Menu();
      menu.add(new qx.ui.menu.Button("Find..."));
      menu.add(new qx.ui.menu.Button("Replace..."));
      menu.add(new qx.ui.menu.Button("Find in files..."));
      menu.add(new qx.ui.menu.Button("Replace in files..."));

      button = new qx.ui.menubar.Button("Tools");
      button.setMenu(menu);
      widget.add(button);

      menu = new qx.ui.menu.Menu();
      menu.add(new qx.ui.menu.Button("Cascade"));
      menu.add(new qx.ui.menu.Button("Show All"));
      menu.add(new qx.ui.menu.Button("Hide All"));

      button = new qx.ui.menubar.Button("View");
      button.setMenu(menu);
      widget.add(button);

      menu = new qx.ui.menu.Menu();
      menu.add(new qx.ui.menu.Button("About Qooxdoo"));
      menu.add(new qx.ui.menu.Button("About QxBuild"));
      menu.addSeparator();
      menu.add(new qx.ui.menu.Button("QxBuild-Theme test"));

      button = new qx.ui.menubar.Button("Help");
      button.setMenu(menu);
      widget.add(button);
    },

    addSomeToolItems: function(widget)
    {
      var part1 = new qx.ui.toolbar.Part();
      var newButton = new qx.ui.toolbar.Button("New", "./icons/new.png");
      var copyButton = new qx.ui.toolbar.Button("Copy", "./icons/copy.png");
      var cutButton = new qx.ui.toolbar.Button("Cut", "./icons/cut.png");
      var pasteButton = new qx.ui.toolbar.Button("Paste", "./icons/paste.png");

      part1.add(newButton);
      part1.add(new qx.ui.toolbar.Separator());
      part1.add(copyButton);
      part1.add(cutButton);
      part1.add(pasteButton);

      var part2 = new qx.ui.toolbar.Part();
      var check = new qx.ui.toolbar.CheckBox("Toggle", "./icons/underline.png");
      part2.add(check);

      var part3 = new qx.ui.toolbar.Part();
      var radioButton1 = new qx.ui.toolbar.RadioButton("Left", "./icons/left.png");
      var radioButton2 = new qx.ui.toolbar.RadioButton("Center", "./icons/center.png");
      var radioButton3 = new qx.ui.toolbar.RadioButton("Right", "./icons/right.png");
      part3.add(radioButton1);
      part3.add(radioButton2);
      part3.add(radioButton3);

      var radioGroup = new qx.ui.form.RadioGroup(radioButton1, radioButton2, radioButton3);
      radioGroup.setAllowEmptySelection(true);

      var helpButton = new qx.ui.toolbar.Button("Help", "./icons/help.png");

      widget.add(part1);
      widget.add(part2);
      widget.add(part3);
      widget.addSpacer();
      widget.add(helpButton);
    },

    addSomeListItems: function(widget)
    {
      for (var i = 0; i < 100; i++)
      {
        var title = "Item #" + i;
        if (i == 0) title += " (this is long to see scrollbar)";
        var item = new qx.ui.form.ListItem(title);
        widget.add(item);
      }
    },

    addSomeTreeItems: function(widget)
    {
      var root = new qx.ui.tree.TreeFolder("Root");
      root.setIcon("./icons/root.png");
      root.setOpen(true);

      widget.setRoot(root);
      widget.setHideRoot(false);

      for (var i = 0; i < 5; i++)
      {
        var ti = new qx.ui.tree.TreeFolder("Item I#" + i);
        ti.setIcon("./icons/folder.png");
        if (i == 0) ti.setOpen(true);
        root.add(ti);

        for (var j = 0; j < 5; j++)
        {
          var tj = new qx.ui.tree.TreeFolder("Item J#" + j + (j == 0 ? "(long to see scrollbar" : ""));
          tj.setIcon("./icons/file.png");
          ti.add(tj);
        }
      }
    },

    createTable: function()
    {
      var i;
      var rowData = [];
      for (i = 0; i < 1000; i++) rowData.push([i, "Item #" + i]);

      var tableModel = this._tableModel = new qx.ui.table.model.Simple();
      tableModel.setColumns([ "ID", "Value" ]);
      tableModel.setData(rowData);

      // table
      var table = new qx.ui.table.Table(tableModel);
      return table;
    },

    // ========================================================================
    // [Other View]
    // ========================================================================

    makeOtherView: function(parent)
    {
      //parent.setLayout(new qx.ui.layout.VBox());
      //parent.add(new qx.ui.form.TextField());
    },

    // ========================================================================
    // [Generic View]
    // ========================================================================

    makeGenericView: function(parent)
    {
      parent.setShowCloseButton(true);
    },

    // ========================================================================
    // [Group]
    // ========================================================================

    groupCreate: function(title)
    {
      var group = new qx.ui.groupbox.GroupBox(title);
      group.setLayout(new qx.ui.layout.Grid(1, 1));
      group.getLayout().setColumnMinWidth(0, 80);
      group.getLayout().setColumnFlex(1, 1);
      group.__myrow = 0;
      return group;
    },

    groupAdd: function(group, title, widget)
    {
      var row = group.__myrow++;
      var col = 0;

      if (title != null) group.add(new qx.ui.basic.Label(title), { row: row, column: col++ });
      group.add(widget, { row: row, column: col++ });
    }
  }
});
