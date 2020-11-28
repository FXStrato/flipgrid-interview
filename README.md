# Flipgrid Coding Exercise

## Tech Used
- [Create React App](https://github.com/facebook/create-react-app) for bootstrapping application
- [React Hook Form](https://react-hook-form.com/) for form validation
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) for routing


## Notes
- Added delay to Sign Up to replicate time taken to validate in the backend
- Added loading state to button to show visual delay
- Added no match error page for non matching routes

## Caveats
- Did not make an Input component as React Hook Form uses it's own register for ref, decided to go the easier route and just make the inputs inside the Signup form. If given more time, would have figured out how to set up the ref properly as a prop.
- Did not make a Header component as the header itself was simple enough to just be an h1 with an inline style; if it had more to it, would definitely have it be its own component.