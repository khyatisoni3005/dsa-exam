class Q {
    constructor() {
        this.queue = []
        this.head = 0
        this.tail = this.queue.length - 1
        this.size = 5

    }

    add(val) {
        if (this.queue.length < this.size) {
            this.queue.push(val)
        }
        else {
            console.log("q overload");
        }
    }
    head() {
        console.log(this.queue[0]);
    }
    tail() {
        console.log(this.queue[this.tail]);
    }
    remove() {
        if (this.queue.length - 1) {
            this.queue.shift()
        }
    }
    print() {
        console.log(this.queue);
    }
    empty() {
        if (this.queue.length === 0) {
            console.log("queue is empty");
        }
    }
}

const queue = new Q()
queue.add(3)
queue.add(434)
queue.add(3665)
queue.add(343)
queue.add(87)
queue.print()


