# Technical Assessment

## Prerequisites

- Read the **README** fully.
- This application is built using [React](https://reactjs.org/), [Vite](https://vitejs.dev/) and [Typescript](https://www.typescriptlang.org/).
- To open the application run the following:

```bash
yarn
yarn dev
```

## The Main Objectives

There are **TWO MAIN** objectives of the technical assessment:

**1.** Refactor the people module in order to meet all of the criteria in the [code section of the evaluation](#evaluation).

**2.** Ensure that as many tests as possible are passing in the spec files.

```
The name of the game here is TDD (Test Driven Development).

There are two spec files located in:

- src/app/app.spec.tsx
- src/app/modules/people/people.spec.tsx
```

## Bonus (Optional) Tasks

- Update the Github Actions to run Formatting and Linting Checks.
- Add a "Create Person" feature to the application.
  - You have full autonomy and ownership on the requirements of this feature.
  - If attempting this please write unit and integration tests.
- Add your own styling to the features.

## Rules

- **_You are not allowed to alter the tests files in any way unless specified._**
- You can make any changes do the codebase that you feel necessary to complete the main objective of the technical assessment. **(_Except the test files unless specified_).**
- You may not use a ui library/ framework **(_ANTD, MaterialUI etc_).**
- You can use any other library that you want just be prepared to justify your choices.

## API Mocking (IMPORTANT!)

- The application uses [MSW](https://mswjs.io/) to mock api calls.
- The api mocking is handled in `src/api-mocks`.
- You may **ALTER THE API** mocking in any way you see fit.
- You may make any **ASSUMPTIONS** on what the api expects and returns.
- If you are not familiar with [MSW](https://mswjs.io/) than you can replace it with another solution.

## Considerations / Recommendations

- Treat this like you are building a feature for a pre existing enterprise application.
- This is your opportunity to show what you can bring to our engineering team as a FE developer.
- Write clean, reusable and performant code.
- The mocked api only returns 100 results, you should assume that this number is infinite. **HOW WOULD THIS INFLUENCE YOUR TASK SUBMISSION?**
- You do not need to get all tests passing but applicants that complete all tests will be ranked more favorably.
- The test are written using a combination of [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) and [vitest](https://vitest.dev/).
- You can also add the [Vitest VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer) to run tests individually.
- There are two commands that allow you to run the tests:

```bash
yarn test # Opens Vitest ui in watch mode
yarn test:coverage # Generates a coverage report
```

## Evaluation

_The assessment will be evaluated based on the following:_

- Passing Tests
- Code
  - Quality
  - Structure
  - Consistency
  - Readability
  - Reusability
  - Performance
- Bonus Tasks
