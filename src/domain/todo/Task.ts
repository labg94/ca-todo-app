export class Task {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    if (!this.value || !this.value.trim()) throw new Error("the value needs at least one word");
  }
}
