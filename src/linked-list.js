class Node {
    constructor() {
        this.value = null;
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

        // If empty list, add node as head
        if (!this.head) {
            this.head === new Node();
            return;
        }

        // Else, assign as new tail
        this.tail.next = newNode;
        this.tail = newNode;
    }
}
