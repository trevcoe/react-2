### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

It allows navigation among the components in an app, allows changing the browser url, and keeps the ui in sync with the url.

- What is a single page application?

Its an app that doesn't require the page to reload to access the sites contents. 

- What are some differences between client side and server side routing?

Client side happens can keep everything happening on one page, server side requires data to be sent back and forth, requiring page refreshes and longer wait times.

- What are two ways of handling redirects with React Router? When would you use each?



- What are two different ways to handle page-not-found user experiences using React Router? 

You can show the user an error and redirect them to another page, or back to the previous one.

- How do you grab URL parameters from within a component using React Router?

You can use: import { useParams } from 'react-router-dom' , and call this in your function.

- What is context in React? When would you use it?

Context provides a way to share values between components, without having to pass a prop through everything.

- Describe some differences between class-based components and function
  components in React.

Functional components are basically js functions. Class-based components extends from react, implements logic and state. Lifecycle methods can be used in class-based.

- What are some of the problems that hooks were designed to solve?

It allows us to make modifications to our logic once the rendering has been performed.