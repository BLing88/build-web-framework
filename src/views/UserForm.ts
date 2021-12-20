export class UserForm {
  constructor(public parent: HTMLElement) {}

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <input />
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
