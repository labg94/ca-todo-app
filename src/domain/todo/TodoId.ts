export class TodoId {
  readonly value: string;

  constructor(value: string = (Math.random() * 1000).toString()) {
    this.value = value;
  }
}
