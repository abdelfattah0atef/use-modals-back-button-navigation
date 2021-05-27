# What is this?

Handle closing modals, drawers, accordions or any other component that has a toggling function for opening and closing the component.

when clicking on the browser back button or the mobile native back button.

# Installation

`npm i --save use-modals-back-button-navigation`

Then...

```
import useModalsBackButtonNavigation from 'use-modals-back-button-navigation';

useModalsBackButtonNavigation({
    onClose: onClose,
    hash: 'modal-example', // or use any name that you want
    isModalOpen: isOpen
});
```

