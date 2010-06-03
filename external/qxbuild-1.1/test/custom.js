// [Application]
qx.Class.define("custom.Application",
{
  extend : qx.application.Standalone,

  members :
  {
    // [Entry point]
    main: function()
    {
      // [SuperClass]
      this.base(arguments);

      // [Main Container]
      this._container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
      this.getRoot().add(this._container, {edge: 0});

      // [Add your widgets to this._container]
      this._tabView = new qx.ui.tabview.TabView();
      this._container.add(this._tabView, {edge: 0});

      var page1 = new qx.ui.tabview.Page("Tab1");
      this.makeTab1View(page1);
      this._tabView.add(page1);

      var page2 = new qx.ui.tabview.Page("Tab2");
      this.makeTab2View(page2);
      this._tabView.add(page2);
    },

    makeTab1View: function(parent)
    {
      parent.setLayout(new qx.ui.layout.VBox());
      parent.add(new qx.ui.form.Button("Hello qxbuild"));
    },

    makeTab2View: function(parent)
    {
      parent.setLayout(new qx.ui.layout.VBox());
      parent.add(new qx.ui.form.TextField());
    }
  }
});
