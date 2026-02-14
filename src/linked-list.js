/**
 * Represents a single node in a singly linked list.
 */
class Node {
    /**
     * Creates a new node.
     * @param {*} value - The value stored in the node.
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * A singly linked list implementation.
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Adds a value to the end of the list.
     * @param {*} value - The value to append.
     */
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

    /**
     * Adds a value to the beginning of the list.
     * @param {*} value - The value to append.
     */
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

    /**
     * @returns {number} The total number of nodes in the list.
     */
    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    /**
     * @returns {*} The value of the first node in the list. It empty, returns undefined.
     */
    head() {
        return this.head ? this.head.value : undefined;
    }

    /**
     * @returns {*} The value of the final node in the list. It empty, returns undefined.
     */
    tail() {
        return this.tail ? this.tail.value : undefined;
    }
}
