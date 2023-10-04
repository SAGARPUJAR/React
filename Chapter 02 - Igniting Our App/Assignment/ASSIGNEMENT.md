# What is `NPM` ?
A: It is used for package management and default manager for Node projects. `NPM is installed when NodeJs` is installed on a machine. It comes with a CMD used to interact with the online databases of NPM. This Database is called the NPM Registry, and it hosts public and private 'packages'. To add or update packages, we use the NPM CLI to interact with this database.

# How to initialize `NPM` ?
A: **npm init**

# What is `Parcel / Webpack`? Why do we need it ?
A: `Parcel/WebPack` is type of a web application bundler used for developement  and productions purposes or power our application with different type of functionalities and features. It offeres blazing fast performance utilizing multicore processing and required zero configuration. Parcel can take any type of file as entry point, but the HTML or JavaScript file is good place to start. Parcel/WebPack are type of bundlers that we use to power our application with different type of functionalitie and features. <br>
Parcel Featues : 
1. `HRM (Hot Module Replacement)` - Parcel keeps track of file chnages via file watcher algorithm (Written in C++) and renders the changes in the files.
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
A: `parcel.cache` is used by parcel(bundler) to reduce the building time. It stores the information about your project when parcel builds it, so that when  it rebuilds, it doesn't have to re-parse and re-analyze from scratch. It's a key reason why parcel can be so quick in developement mode.

# What is `NPX` ?
A: `npx` (Node Package eXecute) is tool that is used to execute the packages. It comes with the npm. when you installed above 5.2.0 version, automatically npx will be installed. It is npm package runner that can execute any package that you want from the npm registry without even installing that package.

# What is Difference between `dependencies` and `dev-dependencies` ?
A:`Dependecies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, react, Angular, Express, Jquery and etc. 
  `DevDependencies` should contain modules/packages a developer needs during developement. Such as `parcel, webpack, vite, mocha`, these packages are necessarry only while you are developing yur project, not necessary on production. To Save dependency as DevDependency on installation we need to do :
- `install --save-dev`
instead of just,<br>
- `npm install -save`

# What is `Tree Shaking` ?
A: `Tree Shaking` is a term used to describe the `process of removing unused exports from modules`. This is typically `done during the bundling process, using tool such as Webpack or Rollup`. It `relies` on the `import` & `export` statements to detect if code modules are exported and imported for use between JavaScript files.

# What is `Hot Module Replacement` ?
A: `HMR (Hot Module Replacement)` exchanges, adds or removes modules while an application is running, without full load.<br> This can be significantly speed up developement in a few ways: <br>
- `Retain application state` which is lost during a full reload.
- `Save Valuable` developmenet time by `only updating what's changed`.
- `Instant Update` the browser when modification are made to CSS/JS in the source code, which is almost comparable to changing the styles directly in the browser's dev tool.

# What is `.gitignore` ? What should we need to add and What we should not add to this file ?
A: A `.gitignore` is file specifies intentionally untracked files that Git Should ignore. <br>
Files Already tracked by Git are not affected.<br>
1. What needs to be added in .gitignore : `any files that do not need to get commited` such as `dist, node_modules, parcel-cache` etc.
2. What need not to be added in .gitignore : `any files that need to get commited` such as `source` etc

# What is Difference between `package.json` and `package-lock.json` ?
A:
* In Node.js `package.json` is a versioning file used to install multiple packages in your project.
* As you intialize your node application you can see, `package.json` and `package.-lock.json` files are generated.
* Initializing the init : `npm init`
* `Package.json` : 
    - contains metadata about the project and also the functional dependecies that is required by the application.
    - It is mandatory for each and every project.
    - It contains information such as name, description, author, script and dependecies.
* `package-lock.json` : 
    - is created for **locking the dependecy with the installed Version**. It will install **Exact Latest Version of that package in your application and save it in package.json**
    - It describes the exact tree that was generated to allow subsequent installs to have identiacal tree.
    - It allows future devs to install the same dependecies in the project.
    - It contains the name, description and locked version of the project.

# Why I should not modify `package-lock.json` ?
A:
- It is generated file and is not designed to be manually edited.
- It's purpose is to track the entire tree of dependecies and the exact version of each dependecy.
- You Should `commit` package-lock.json to your code repository. 

# What is `node_modules` ? Is that good !dea to push that to github ?
A:
- Node Modules `provide a way to re-use code in your Node Application`.
- No, its not good to move `node_modules` to github.

# Waht is `dist` folder ?
A: It is the `build folder` which `contains all the files and folders` which can be `hosted in server`.

# What is `broweserlists` ? Read about dif bundlers : `Vite, webpack, parcel`
A:
- It's a one of the `most popular frontend library` dependecies.
- `Browserlists` : `defines and shares` the `list of traget browsers` between `various front end tools`. 
- **WebPack** :
    1. The Most Popular Bundler in 2023.
    2. Approches used by WebPack:
        - A build Scripts.
        - A Config File.
        - Loaders used to transform files.
        - Plugins for more complex stuffs.
- **Parcel**
    1. Its a **Zeo Configuration** environement. which means **Very little and Precise**


# What is `^ - caret` and  `~ tilde` ?
A:
1. `Tilde ~`:
    - it is used to specify a version range that allows for `patch updates`.
    - `patch updates` are updates that only includes `Bug Fixes` and `Do Not introduce any breaking changes`.
    - When use `~` symbol, your project can use any version of the package that has the `major and minor version` number as specified version.
2. `Caret ^`:
    - it is used to specify a version range that allows for both `minor and patch updates`.
    - when we specify version range using `^`, your project can use any version of the package that has the `major version`. 

# Explain about `Script Types` in `HTML` ?
A: 
- The `script` **HTML** element is used to embed executable code or data.
- This is typically used to `embed` or `refer to JS`
- The `type` attribute of the `<script>` element indicates the **type of script** represented by the element.
- **Types** in `<script type="">`
    1. module : 
        - This Value causes the code to be treated as `javascript Module`.
    2. importmap :
        - This value indicates that the body of the element contains `import map`.
        - `import map` is **JSON object** that developers can use to control **how the browser resolves module specifiers when importing Javascript modules**