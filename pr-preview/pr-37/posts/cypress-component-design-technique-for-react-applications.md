---
title: Cypress.io Component Design Technique for React Applications
description: Cypress is a game-changer in the automation testing world, the way that Cypress was built and its architecture allows us as testers to cover more scenarios.
createdAt: 2021-02-05
coverImage: images/cypress-component-design-technique-for-react-applications.png
tags: Cypress, Testing, React
author: Hatem Hatamleh
---

Cypress is a game-changer in the automation testing world, the way that Cypress was built and its architecture allows us as testers to cover more scenarios.

Cypress is not Selenium; in fact, it is different. And the way to build and design a framework should be different as well.

The most famous design technique in Selenium is the Page Object Model, and many testers use the same design technique with Cypress. Even that Cypress on their official website [recommended](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/) us not to go with that approach.

## Page Object Model

The main benefit of using the page object model Is to make the automation framework maintenance-friendly. We can define a specific page's selectors in a separate file and then use these selectors in our test cases.

```js
class SignInPage {
  visit() {
    cy.visit("/signin");
  }
  getEmailError() {
    return cy.get(`[data-testid=SignInEmailError]`);
  }
  getPasswordError() {
    return cy.get(`[data-testid=SignInPasswordError]`);
  }
  fillEmail(value) {
    const field = cy.get(`[data-testid=SignInEmailField]`);
    field.clear();
    field.type(value);
    return this;
  }
  fillPassword(value) {
    const field = cy.get(`[data-testid=SignInPasswordField]`);
    field.clear();
    field.type(value);
    return this;
  }
  submit() {
    const button = cy.get(`[data-testid=SignInSubmitButton]`);
    button.click();
  }
}
export default SignInPage;
```

The main two downsides using the typical page object model with cypress are:

- Page objects introduce an additional state into the tests, separate from the application’s internal state. This makes understanding the tests and failures harder.
- Page objects make tests slow because they force the tests to always go through the application user interface.

## Component-Based Architecture

On the other hand, a React application is component-based, where a specific page will be built from a collection of components. And components in React can be used on different pages too. So if we want to use the Page Object Model, we may define the same locator twice on different pages.

So having these two facts, At Vandebron, we came up with a new way to design our Cypress Automation framework by creating a separate JavaScript file for every component in our application, inside a folder called `components` within our Cypress project as below:

```js
// Locators
export const getEmailError = () => cy.get(`[data-testid=SignInEmailError]`);
export const getPasswordError = () =>
  cy.get(`[data-testid=SignInPasswordError]`);
export const emailField = () => cy.get(`[data-testid=SignInEmailField]`);
export const passwordField = () => cy.get(`[data-testid=SignInPasswordField]`);
export const submitButton = () => cy.get(`[data-testid=SignInSubmitButton]`);

// Actions
export const visit = () => cy.visit("/signin");
export const performLogin = (email, password) => {
  emailField().clear().type(email);
  passwordField().clear().type(password);
  submitButton().click();
};
```

Having it built this way, we eliminated all the previous problems mentioned earlier; we are not adding any classes, and we are defining objects within our test cases. And the most important part is that we are following the way that Cypress recommends it.

And after defining the component locators and actions, we can import them inside our test case and use them as below:

```js
import LoginComponent from "../components/loginComponent";
import Menu from "../components/Menu";

describe("Test Login Page", () => {
  it("should show an error message if the password in wrong", () => {
    LoginComponent.visit();
    LoginComponent.performLogin("email@gmail.com", "wrongPassword");
    LoginComponent.getPasswordError().should("be.visible");
  });
  it("should show the logout button if the user logged in succesfully", () => {
    LoginComponent.visit();
    LoginComponent.performLogin("email@gmail.com", "correctPassword");
    Menu.LogoutButton().should("be.visible");
  });
});
```

And as you can see, our test cases are readable for anyone! And if any locator changes in any of the components, we can easily fix it in one location and from the same file. And lastly, if a component will be used in different places, we can use the same code.

In the next article, I will talk about how we use Cypress in our manual testing during the sprint and how it saves us tons of time and effort.
