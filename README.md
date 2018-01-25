# NgModule Error with ng-packagr.
AOT always fails with ng-packagr packaged libraries.

Affected versions `1.6.0` and up to `2.0.0-rc.11`

## 1. Build
Go to library-ng-packagr and build the library. I have checked in the build (`dist`) for your convenience.

```
cd dist
yarn link
```

## 2. Try out
Go to the testproject.
```
cd testproject
yarn link "@scoped/some-name"
yarn start
```
Confirm that you see *foo foo*. Now you're sure it's runable.

## Reproduce the error

```
cd testproject
yarn build
```
This will run a production build (--prod) (through angular cli) that will default to aot. This fails with the following error.
```
ERROR in : Unexpected value 'FooModule in /testproject/node_modules/@scoped/some-name/foo/foo.module.d.ts' imported by the module 'AppModule in /testproject/src/app/app.module.ts'. Please add a @NgModule annotation.
```
If you opt-out of aot by running `build-no-aot`
you will get a successful build.
