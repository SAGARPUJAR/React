# Theory

1. Is `JSX` is mandatory for React ?
    * No, Its not mandatory to use `JSX` along with `React`.

2. Is `ES6` is mandatory for React ?
   * `ES6` is the standardization of javascript for making code more readable and more accessible.
   * If we **don’t use** ES6 in react, there is an alternative to perform. We use **create-react-class** instead of ES6. 

3. `{TitleComponent}` VS `<TitleComponent />` VS `<TitleComponent></TitleComponent>` ?
    - `{TitleComponent}` : This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
    - `<TitleComponent />` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the `<  />` expression.
    - `<TitleComponent><TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

4. How I can write `comments` in `JSX` ?
    - If you want to comment something in JSX you need to **use JavaScript comments inside of Curly braces like {/*comment here*/}**. It is a regular /* Block Comments */ , but need to be wrapped in curly braces. 

5. What is `<React.Fragment></React.Fragment>` and `<></>` ?
    - `<React.Fragment></React.Fragment>` : 
        * It is a **common pattern** in React is **for a component to return multiple elements**. 
        * `Fragments` let you group a **list of children without adding extra nodes to the DOM**.
    - `<></>` : 
        * This is **empty JSX tag** `<></>` is `shorthand` for `<Fragment></Fragment>` in most cases.
    - `props` :
        * **optional** key: **Fragments declared with the explicit** `<Fragment>` syntax may have keys.
        * **If you want to pass key** to a `Fragment`, you can’t use the `<>...</>` syntax. **You have to explicitly import** `Fragment` from `'react'` and render `<Fragment key={yourKey}>...</Fragment>`.
        * Use `Fragment`, or the equivalent `<>...</>` syntax, to group multiple elements together. You can use it to put multiple elements in any place where a single element can go.
            - For example, a component can only return one element, but by using a Fragment you can group multiple elements together and then return them as a group:
            - Example : 
                <code>
                    function Post() {
                        return (
                             <>
                               <PostTitle />
                               <PostBody />
                             </>
                         );
                    }
                </code>

6. What is Virtual DOM ?
    - The virtual DOM (VDOM) is **a programming concept where an `ideal`, or `“virtual”`, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM**.
    - React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM).
    - So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. 
    - **Manipulating DOM is slow, but manipulating Virtual DOM is fast** as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 

7. What is `Reconciliation` in React ?
    - The `“reconciliation”` **algorithm in React is how the decision to re-render the component is made**.
    - **DOM manipulation is expensive and time consuming**, both in **mounting and unmounting**. Part of what makes React very performant is its `reconciliation algorithm`.
    - In short, it watches closely for differences, and only updates the DOM when necessary and tries to update only the parts which need to be changed.

8. Waht is `React Fiber` ?
    - `React Fiber` is a **backwards compatible, complete rewrite of the React core. In other words, it is a reimplementation of older versions of the React reconciler.**
    - What is the purpose of React Fiber?
        * **Improved performance**
        * **Better suitability for advanced UI**
        * **Control over the "priority" of work**
        * **More fluid experience**
    - What are the features of React Fiber?
        * Supporting better error handling and recovering from errors
        * Rendering subtrees into DOM node containers (Portals)
        * Support for new render return types like fragments and strings
        * Returning multiple elements from a render function

9. Why we need to use `Key` in React ? When do we need `Keys` in React ?
    - A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.
    - `Keys` also used in `props`, which helps to identify the each component value uniquely.
    - **Example:**
        <code>
            <li key={0}>1</li>
            <li key={1}>2</li>
            <li key={2}>3</li>
        </code>
    - **Example**
        <code>
            <Component key="unique_value" data={object} />
        </code>

10. Can we use `index` as `key` in React ?
    - **Yes**, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.


11. What is `props` in React ? Ways to `Pass Props` into `component` ?
    - **props stands for properties**.
    - **Props are arguments passed into React components**.
    - props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
    - Example :
        <code>
            function App() {
                return (
                     <div className="App">
                       <Tool name="test user" tool="Figma"/> // name and tool are props
                     </div>
                 )
            }
        </code>

12. What is `Config Driven UI` ?
    - `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.
# Coding

* Build a Food Ordering App
    - Think of a cool name for your app
    - Build an `AppLayout`
    - Build a `Header Component` with `Logo` & `Nav Items` & `Cart`
    - Build a `Body Component`
    - Build `RestaurantList Component`
    - Build `RestaurantCard Component`
    - Use `static data initially`
    - Make your `card dynamic(pass in props)`
    - `Props` - passing arguments to a function - Use Destructuring & Spread operator
    - `Render` your cards with `dynamic data of restaurants`
    - Use `Array.map` to `render all the restaurants`    
**PS. Basically do everything that I did in the class, in the same sequence. Don't skip small things.**

# References 
* [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
* [React without JSX](https://legacy.reactjs.org/docs/react-without-jsx.html)
* [Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html)
* [Reconciliation](https://legacy.reactjs.org/docs/reconciliation.html)
* [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture/)
* [React Without ES6](https://legacy.reactjs.org/docs/react-without-es6.html)
* [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/) 

