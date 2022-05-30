export class TodoId {

    readonly value: string;


    constructor() {
        this.value = (Math.random() * 1000).toString()
    }


}
