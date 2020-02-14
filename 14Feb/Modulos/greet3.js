function Greetr(name) {
    this._name = name;
    this.greeting = `Hello ${this._name}`;
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr('Roberto');