function mountComponent(component){
    // This will generate the DOM node that will go
    // into the DOM. We defer to the component
    // instance since it will contain the renderer
    // specific implementation of what that means.
    // This allows the Reconciler to be reused
    // across DOM & Native.
    let markup = component.mountComponent();

    // React does more work here to ensure that
    // refs work. We don't need to.
    return markup;
}

function receiveComponent(component, element) {
    // Shortcut! We won't do anything if the next
    // element is the same as the current one. This
    // is unlikely in normal JSX usage, but it and
    // optimization that can be unlocked with
    // Babel's inline-element transform.
    let prevElement = component._currentElement;
    if (prevElement === element) {
        return;
    }

    // Defer to the instance
    component.receiveComponent(element);
}

function unmountComponent(component) {
    // Again, Reac will do more work here for
    // refs. We won't.
    component.unmountComponent();
}

function performUpdateIfNecessary(component) {
    component.performUpdateIfNecessary();
}

export default {
    mountComponent,
    receiveComponent,
    unmountComponent,
    performUpdateIfNecessary,
};