### 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time?

I timeboxed myself to about 4 hours to complete the assignment. I think it's a decent MVP, but there are definitely areas for improvement. I wanted to improve the the filtering options with some checkboxes or radios for details like price.

Test coverage is very weak I wrote a test for the filtering logic but would like to do some UI testing with `react-testing-library`.

Additionally I implemented a single stylesheet using `scss` because the app is simple and to save time. I prefer working with `styled-components`, but alternatively I would componentize my css.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Optional chaining is probably the newest addition to JavaScript that I am most excited about. It allows you to access deeply nested properties without throwing an error if something is undefined.

```
// without optional chaingin
const street = user && user.address && user.address.street;

// with optional chaining
const street = user?.address?.street;
```

### 3. How would you track down a performance issue in production? Have you ever had to do this?

When doing some basic performance testing, I've worked with the waterfall in the performance tab in Firefox dev tools to see what processes are taking the most time. I've also used tools like Google PageSpeed and GTmetrix.

### 4. How would you improve the API that you just used?

The images provided by the API are currently broken. I included a thumbnail image in my restaurant cards to demonstrate how they would be implemented. But ideally I would fix that. T

he API only returns paginated data, and for an application like this where we're doing further filtering on the frontend it would be ideal to access all available records for a specific city.

### 5. Please describe yourself using JSON.

```
{
  "name": "Eugene Michasiw",
  "age": 28,
  "skills: ["JavaScript", "React", "HTML", "CSS", "a11y"],
  "hobbies": ["cooking", "improv", "fitness"],
}
```
