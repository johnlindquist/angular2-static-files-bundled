SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app/": "src/"
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    experimentalDecorators: true,
    emitDecoratorMetadata: true
  },

  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@ngrx/store": "npm:@ngrx/store@1.3.3",
    "angular2": "npm:angular2@2.0.0-beta.10",
    "es6-promise": "npm:es6-promise@3.1.2",
    "es6-shim": "npm:es6-shim@0.33.13",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "rxjs": "npm:rxjs@5.0.0-beta.2",
    "store-saga": "npm:store-saga@1.0.0-beta.4",
    "zone.js": "npm:zone.js@0.6.4"
  },
  packages: {
    "app": {
      "main": "app.ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    },
    "github:frankwallis/plugin-typescript@4.0.2": {
      "map": {
        "typescript": "npm:typescript@1.8.9"
      }
    }
  }
});
