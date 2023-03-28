# frontend
Web application.

## How to contribute
1. Create a new issue if none exists (Use the [project view](https://github.com/orgs/team3dat3/projects/1/views/2)).
2. Create a new branch with the issue id: `issue/<id>` (e.g. `issue/43893`)
3. Push your branch and create a pull request.
4. Link the issue in the PR's comment section as `closes #<issue id>` (e.g. `closes #10`)
5. Wait for status checks to pass.
6. Assign reviewers and wait for a response.
7. Merge.

## Link Component
```js
import Link from "./components/Link.js";

const link = Link({
    type: 'primary',
    text: 'Click me',
    href: '#/movies',
    animation: {
        onclick: {
            type: 'rubberBand',
            duration: 800
        }
    }
});
```

## Button Component
```js
import Button from "./components/Button.js";

const button = Button({
    type: 'primary',
    text: 'Click me',
    animation: {
        onclick: {
            type: 'jello',
            duration: 800
        }
    }
});
```

## Card Component
```js
import Card from "./components/Card.js";

const card = new Card({
    type: "primary",
    header: "Header",
    image: "https://picsum.photos/200/300",
    body: "Body",
    footer: "Footer",
    animation: {
        onmouseenter: {
            type: "jello",
            duration: 1000
        },
    }
});
```