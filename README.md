

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<!--1. answer: -->getElementById is used to select a single element by its unique ID. getElementsByClassName selects all elements with a specific class name.On the other hand,querySelector returns the first matching element while querySelectorAll returns all matching elements.


### 2. How do you create and insert a new element into the DOM?

<!-- 2. answer:  -->To create and insert a new element into the DOM, i have to first use document.createElement to create the element.Then i need to add text, attributes, or content. then i have to use append child.


### 3. What is Event Bubbling? And how does it work?

<!-- 3. answer: -->Event bubbling is a process where an event starts from the target element and then propagates upward to its parent element in the dom.when we clicked on a child element, it runs on that element then it moves step by step to its parent. 


### 4. What is Event Delegation in JavaScript? Why is it useful?

<!-- 4. answer: -->Event Delegation is a JavaScript technique where a event listener is added to a parent element to handle events for its child elements.it is useful because improve performance by reducing the number of event listeners, saves memory, keeps code cleaner.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

<!-- 5. answer: -->preventDefault stops the browser’s default action for an event.
while stopPropagation blocks the event from reaching other elements.