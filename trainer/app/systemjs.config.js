/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'js',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
      'tslib': 'npm:tslib/tslib.js',
        '@ngx-translate/core': 'npm:@ngx-translate/core/bundles/core.umd.js',
        '@ngx-translate/http-loader': 'npm:@ngx-translate/http-loader/bundles/http-loader.umd.js',
        'ngx-modialog': 'npm:ngx-modialog/bundles/ngx-modialog.umd.js',
        'ngx-modialog/plugins/bootstrap': 'npm:ngx-modialog/plugins/bootstrap/bundles/ngx-modialog-plugins-bootstrap.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'rxjs/operators': 'npm:rxjs/operators',
      'rxjs-compat': 'npm:rxjs-compat',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: 'main.js',
        defaultExtension: 'js',
      },
      rxjs: {
        main: "index.js",
        defaultExtension: 'js'
      },
      "rxjs/operators": {
        main: "index.js",
        defaultExtension: "js"
      },
      "rxjs-compat": {
        main: "index.js",
        defaultExtension: "js"
      }
    }
  });
})(this);