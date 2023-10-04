# What is NPM ?
A: It is used for package management and default manager for Node projects. `NPM is installed when NodeJs` is installed on a machine. It comes with a CMD used to interact with the online databases of NPM. This Database is called the NPM Registry, and it hosts public and private 'packages'. To add or update packages, we use the NPM CLI to interact with this database.

# How to initialize `NPM`` ?
A: **npm init**

# What is Parcel / Webpack? Why do we need it ?
A: `Parcel/WebPack` is type of a web application bundler used for developement  and productions purposes or power our application with different type of functionalities and features. It offeres blazing fast performance utilizing multicore processing and required zero configuration. Parcel can take any type of file as entry point, but the HTML or JavaScript file is good place to start. Parcel/WebPack are type of bundlers that we use to power our application with different type of functionalitie and features. <br>
Parcel Featues : 
1. HRM (Hot Module Replacement) - Parcel keeps track of file chnages via file watcher algorithm (Written in C++) and renders the changes in the files.
2. Bundling and Minification.
3. Cleaning Our Code.
4. Creates a Dev and Production build
5. Creates a Local Server and hosts our application.
6. Provides faster builds becasue of `Parcel Caching`.
7. It uses consistance Hashing.
8. It Does Code Splitting.
9. It can perform differential bundling, which means when we use `<script type="module" src="App.js"></script>` it automatically generates the node module fallback for old browsers.
10. Its doing diagnosis the behind the scences.
11. It Provides good Error Handling.
12. It helps to build the solution and host in both HTTP and HTTPS.
13. It does reliable caching.
14. It does Tree Shaking, which means it removes all unused code from the file.
- Installation Commands :
* `npm install -D parcel`
- `-D` is used for developement and as development dependency.
* Parcel Commands :
1. For Dev build 
    - npx parcel index.html <entry point>
2. For Production build
    - npx parcel build index.html <entry point>

# What is .parcel.cache ?
A. `parcel.cache` is used by parcel(bundler) to reduce the building time. It stores the information about your project when parcel builds it, so that when  it rebuilds, it doesn't have to re-parse and re-analyze from scratch. It's a key reason why parcel can be so quick in developement mode.

# What is `NPX` ?
A. `npx` (Node Package eXecute) is tool that is used to execute the packages. It comes with the npm. when you installed above 5.2.0 version, automatically npx will be installed. It is npm package runner that can execute any package that you want from the npm registry without even installing that package.

# What is Difference between `dependencies` and `dev-dependencies` ?
A:`Dependecies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, react, Angular, Express, Jquery and etc. 
  `DevDependencies` should contain modules/packages a developer needs during developement. Such as `parcel, webpack, vite, mocha`, these packages are necessarry only while you are developing yur project, not necessary on production. To Save dependency as DevDependency on installation we need to do :
- `install --save-dev`
instead of just,
- npm install -save