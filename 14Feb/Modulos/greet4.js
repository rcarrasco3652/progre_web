function Greetr(name) {
    this._name = name;
    this.greeting = `Hello ${this._name}`;
    this.greet = () => console.log(this.greeting);
}

module.exports = Greetr;