# Assignment
1. What is JSX ?
    - JSX : Stands for JavaScript XML.
    - JSX Allows us to Write Code inside React.
    - JSX Makes Easier to write and add HTML in React.
    - JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() 
    methods.
    - JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
    - Example 1:
       <code>
            const myElement = <h1>I Love JSX!</h1>;
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(myElement);
        </code>
    - Example 2:
        <code>
            const myElement = React.createElement('h1', {}, 'I do not use JSX!');   
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(myElement);
        </code>
    * Expressions in JSX
        - With JSX you can write expressions inside curly braces { }.
        - The expression can be a React variable, or property, or any other valid JavaScript expression.
        - JSX will execute the expression and return the result
        - Example :
            <code>
                const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
            </code>
    - Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
    - A fragment looks like an empty HTML tag: `<></>`.
2. Super Powers of JSX ?
    - JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
    - JSX converts HTML tags into react elements.
    - You are not required to use JSX, but JSX makes it easier to write React applications.

3. Role of `type` attribute in script tag ? What are the options we can use ?
    - The `type` attribute **specifies the type of the script**.
    - The type attribute identifies the content between the <script> and </script> tags.
    - Options to use inside `type`in `Script` tag:
        * JavaScript :
            <code><script type="text/javascript">...</script> </code>
        * ECMAScript 6 (ES6) or ECMAScript 2015 (ES2015) and later
            <code><script type="module">...</script></code>
        * JSON :
            <code><script type="application/json">...</script></code>
        * JavaScript MIME Type (for older browsers, though it's rarely used nowadays):
            <code><script type="application/javascript">...</script></code>
        * Text Content (for templates or other non-script data):
            <code><script type="text/plain">...</script></code>

4. `{TitleComponent}` VS `<TitleComponent />` VS `<TitleComponent></TitleComponent>` in `JSX` ?
    - `{TitleComponent}` : This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
    - `<TitleComponent />` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the `<  />` expression.
    - `<TitleComponent><TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.