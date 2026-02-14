class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    appendValue(value) {
        const newNode = new Node(value);

        // If empty list, add node as head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // Else, assign as new tail
        this.tail.next = newNode;
        this.tail = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);

        // If list not empty, shift it to next position
        if (this.head) {
            newNode.next = this.head;
        }

        this.head = newNode;

        // If list was empty, update tail
        if (!this.tail) {
            this.tail = newNode;
        }
    }
}
