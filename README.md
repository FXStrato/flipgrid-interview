# Flipgrid Coding Exercise

- https://fxstrato.github.io/flipgrid-interview/
- [PageSpeed Insight Report](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffxstrato.github.io%2Fflipgrid-interview%2F&tab=desktop)

## Tech Used
- [Create React App](https://github.com/facebook/create-react-app) for bootstrapping application
- [React Hook Form](https://react-hook-form.com/) for form validation
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) for routing
- [React Snap](https://github.com/stereobooster/react-snap) for inlining critical css

## Structure
- src
    - components (reusable components)
    - routes (assigns templates to specific routes)
    - templates (made up of components, and called by routes)
- index.js (entry point)
- App.js (contains router and layout wrapper)

## Notes
- Added delay to Sign Up to replicate time taken to validate in the backend
- Added loading state/component to button to show visual delay
- Added no match error page for non matching routes
- Small custom favicon

## Next Steps
- Create Input component that can handle passing of React Hook Form refs to an input element.
- Create critical css to get 100 rating on mobile for PageSpeed Insight report
- 