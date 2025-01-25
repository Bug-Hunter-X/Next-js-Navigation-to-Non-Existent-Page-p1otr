# Next.js Navigation to Non-Existent Page
This repository demonstrates a common issue in Next.js applications: navigating to a page that doesn't exist.  The `about.js` page attempts to navigate to a `/contact` page which hasn't been defined causing a runtime error.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Click the "Go to Contact Page" button.  You'll observe a runtime error in the console related to a missing route.

## Solution
The solution involves either creating the `/contact` page or handling the navigation in a more robust way.  This is demonstrated in the `solutionContent` section below.

## Learning Points
This example highlights the importance of:
* **Careful route planning:** Ensure all links and navigations point to existing pages.
* **Error handling:** Implement mechanisms to gracefully handle situations where a user attempts to access a non-existent route.  This could include redirecting to a 404 page or displaying a user-friendly message.
* **Testing:** Thoroughly testing navigation paths can prevent these types of runtime errors from reaching production.