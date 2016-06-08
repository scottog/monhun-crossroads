# Monster Hunter Crossroads

## Tech stack

* Angular Material
* SCSS
* Angular.js
* Angular-Route
  
## Building

In order to build the stylesheets, you'll need SCSS. The easiest way to do this
is to download Node.js, and run:

    sudo npm install -g gulp
    // ? sudo npm install -g sass?
    // Working on moving to SCSS and gulp, not grunt and LESS

This puts the gulp build system and SCSS on your box.
Then, in the ./app directory for this codebase, run

    bower install

This will watch all your SASS files and turn them into css files

## Deploying

### Locally
Within the project execute the following to install an http-server

    npm install http-server

Then execute http-server from <project_root>/app to start a lightweight server which will deploy your app and tell
you at what addresses it may be accessed.

### Versioning

Our current versioning scheme is as follows:

    <major_release>.<minor_release_number>.<num_deployed_build>

num_deployed_build is a letter, starting with 'a' and incrementing throughout each sprint.
This version number currently resides in the mhx_xroads_app.js file and must be manually updated.

## Styling

* custom.less: This is the actual custom CSS for the site. This holds all styles
  specific to this application. Modify this file in order to add custom styles.
* bootswatch.less: Downloaded from the bootswatch site. This is what holds the
  base color scheme.
* variables.less: Color scheme, etc. Modify this file too. This came with the
  bootswatch theme originally.

## Notes

### Translation

Look in mh_xroads_app.js, where all the localization strings are (for now). Add in a new key
and associated text in each language you want to be translated. Then in the
view, just use {{'MY_KEY' | translated text}}
In the future I want to make this look for JSON mapping files, one for each language as this gets cumbersome very quickly.
