1.
getElementById():
A function that returns an element by id 
Returns null if there is no element.
getElementsByClassName():
A function that returns a HTMLCollection of all elements with the given class
its arraylike collection.
querySelector():
A function that returns the first element that matches the CSS selector.
querySelectorAll():
A function that returns the all element that matches the CSS selector.
---
2.
First we will create an elemennt by document.createElement() and then we will select the parent then insert it using the  method appendChild().
---
3.
Event Bubbling:When ywe click on an element (like a button), the event doesn’t just stop there.It also bubbles up first the button handles it, then its parent, then the parent’s parent, and so on, up to the whole document.
---
4.Event Delegation:Instead of putting a click event on every single child, we put one click on the parent.Then, when any child is clicked, the event bubbles up and the parent can identify which child was clicked.
---
5.preventDefault(): stops the browser’s normal action.
Example: stop a link from opening a new page, or stop a form from submitting the page will automatically reload.

stopPropagation(): stops the event from bubbling.
Example: click on a button but don’t let its parent know about the click.

---

