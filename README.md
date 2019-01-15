# Astrea components generatos

*Components: *

- Angular 1.5+
- React

# Install

`npm install -g astrea-component-gen`

## Create angular components:

`astrea-component create my-component-name`

 *Generated components:*

    \my-component-name
        - my-component-name.controller.js
        - my-component-name.component.js
        - my-component-name.html
        - my-component-name.style.css
        - my-component-name.controller.spec.js

`astrea-component create my-component-name --short`

 *Generated components:*

    \my-component-name
        - controller.js
        - component.js
        - template.html
        - style.css
        - test.js

## Create react components: 
`astrea-component create MyComponentName --r`
    \MyComponentName
        - MyComponentName.jsx
        - index.js
        - MyComponentName.test.js

