// qxloader v0.1, (c) Petr Kobalicek 2009, no licence (public domain).

qxloader =
{
  //! @brief Main method called to load the scripts
  //! @param params {Object} Map of parameters.
  run: function(params)
  {
    var key;

    // Copy everything in params to qxloader.
    for (key in params) this[key] = params[key];

    // Start handler.
    if (qxloader.start) qxloader.start();

    // Add scripts to document.
    var scripts = params.scripts;
    var i;

    for (i = 0; i < scripts.length; i++)
    {
      if (qxloader.$$done[scripts[i]]) continue;
      qxloader.$$nTotal++;
    }

    qxloader.$$next();
  },

  $$next: function()
  {
    if (qxloader.scripts.length)
    {
      var script = qxloader.scripts[0];
      qxloader.scripts.splice(0, 1);

      var e = document.createElement("script");
      e.setAttribute("src", script);
      e.setAttribute("type", "text/javascript");

      // Update progress.
      if (qxloader.progress) qxloader.progress(this.$$nLoaded / this.$$nTotal, script);

      // Special workaround for IE.
      if (qxloader.$$IE)
      {
        e.onreadystatechange = function() 
        {
          if (e.readyState == "loaded" || e.readyState == "complete") 
          {
            e.onreadystatechange = null;
            qxloader.$$onLoad(script);
          }
        }
      }
      else
      {
        e.onload = function()
        {
          qxloader.$$onLoad(script);
        }
      }

      var p = document.getElementsByTagName("head")[0] || document.body;
      p.appendChild(e);
    }
  },

  $$onLoad: function(script)
  {
    // Remove script from pending map.
    qxloader.$$done[script] = true;

    var nLoaded = ++qxloader.$$nLoaded;

    // Calculate count of pending scripts.
    var nTotal = qxloader.$$nTotal;

    qxloader.$$next();

    // If there are no pending scripts we are done.
    if (nLoaded >= nTotal)
    {
      // Update progress.
      if (qxloader.progress) qxloader.progress(1.0, "");

      // Run finish handler if provided.
      if (qxloader.finish) qxloader.finish();

      // Cleanup
      for (var key in this) this[key] = null;

      // Delete itself.
      delete window.qxloader;

      // Start qooxdoo.
      qx.core.Init.ready();
    }
  },

  $$onFail: function()
  {
  },

  //! @brief Start function.
  start: null,

  //! @brief Called when all scripts are loaded (finish).
  finish: null,

  //! @brief Called when one script was load.
  progress: null,

  //! @brief Scripts that are pending to complete
  scripts: null,

  //! @brief Count of scripts loaded
  $$nLoaded: 0,
  //! @brief Count of scripts total
  $$nTotal: 0,
  //! @brief Loaded scripts by qxloader
  $$done: {},

  //! @brief IE detection for onload workaround
  $$IE: !!(window.attachEvent && !window.opera)
};
