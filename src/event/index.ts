export class Event {
    constructor() {

    }

    static addHandler(element: HTMLDocument, type: string, handler: Function) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }

    static removeHandler(element: HTMLDocument, type: string, handler: Function) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler, false);
        } else {
            element["on" + type] = null;
        }
    }

    static getEvent(event: Event) {
        return event ? event : window.event;
    }

    static getTarget(event: Event) {
        return event.target || event.srcElement;
    }

    static preventDefault(event: Event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    static stopPropagation(event: Event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}