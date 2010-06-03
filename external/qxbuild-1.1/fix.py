#!/usr/bin/env python

import os
import shutil

# ------------------------------------------------------------------------------
# [Configuration]
# ------------------------------------------------------------------------------

qxPath = "./qx"

# ------------------------------------------------------------------------------
# [Fix generated files]
# ------------------------------------------------------------------------------

qxPath = "./qx"
qxNames = [
  qxPath + "/script/qx-debug.js",
  qxPath + "/script/qx-release.js"
]

for qxName in qxNames:
  print "    - Fixing: " + qxName

  # Read the file
  fileHandle = open(qxName, "rb")
  fileData = fileHandle.read()
  fileHandle.close()

  # Modify context root
  fileData = fileData.replace('"/QOOXDOO_BUILD_PATH', 'qxsettings["qx.path"] + "')

  # Modify onScriptLoaded()
  fileData = fileData.replace('qx.event.handler.Application.onScriptLoaded();', ';');

  # Save
  fileHandle = open(qxName, "wb")
  fileHandle.truncate()
  fileHandle.write(fileData)
  fileHandle.close()

# ------------------------------------------------------------------------------
# [Add qx-loader]
# ------------------------------------------------------------------------------

print "    - Adding qx-loader.js"
shutil.copyfile("./helpers/qx-loader.js", qxPath + "/script/qx-loader.js")
