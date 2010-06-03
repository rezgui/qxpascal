QxBuild - Qooxdoo framework <http://qooxdoo.org> all-in-one
===========================================================

QxBuild home:
  http://code.google.com/p/qxbuild/

This is complete qooxdoo and configuration needed to generate qooxdoo starting
at version 1.0.1 or SVN. Everything important can be found in config.json and
manifest.json.

If you downloaded this package, it already contains prebuilt qooxdoo in ./qx
directory, so no python tools or qooxdoo instalation is needed at all. But
there are not contribs, if you are planning to use contributions or you need
to better customize qooxdoo features, you must build your own version of qxbuild.

Custom Example
==============

Look at build directory for small example how to use qxbuild. See test/custom.html
and custom/custom.js to play with qooxdoo. Part of qxbuild is also qx-loader that
can be used to load qooxdoo in dynamic way (and as a bonus it allows to show
progress bar to visualize loading process).

Theme Example
=============

After qooxdoo-1.0.1 there is small addition to see the qooxdoo themes in action.
Use test/theme-qooxdoo-modern.html and test/theme-qooxdoo-classic.html applications
for measuring themes. There is addition test/theme-qxet-light.html that can be only
run if you compiled QxBuild with QxET support (see http://code.google.com/p/qxet/).

Building
========

If you want to build your qooxdoo yourself, it's important to change paths
to some files that's not hardcoded, but expects that you have qooxdoo from
subversion in path:
  ../qooxdoo-XXX

I have this filesystem structure for the script already prepared:
  ${ROOT} (any directory)
  ${ROOT}/qxbuild (this package)
  ${ROOT}/qooxdoo-XX (qooxdoo version XXX or SVN)
  ${ROOT}/qooxdoo-contrib-svn (qooxdoo contributions from SVN repository)
  ${ROOT}/qxet (qooxoo extended themes package)

So, if you have different and you want to build qooxdoo library yourself, make
sure that you have correct these files:
${ROOT}/qxbuild/generate.py 
       - QOOXDOO_PATH = '../qooxdoo-XXX'
${ROOT}/qxbuild/config.json 
       - "QOOXDOO_PATH" : "../qooxdoo-XXX",

Always replace ../qooxdoo-XXX with your corresponding path, absolute or relative.

If you are done and you want to build qooxdoo library, type these commands to
command line:
  shell$ generate.py compile-qx
or
  shell$ build.sh (or .bat if you are using Windows)

Enjoy this build!
=================

For any informations send me email or send email directly to qooxdoo mailing list
- Petr Kobalicek <kobalicek.petr@gmail.com>
