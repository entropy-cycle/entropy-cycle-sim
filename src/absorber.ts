import Environment from './environment';

export class Absorber {
    constructor(public parent: Environment, private _object: Environment) {}
    absorb() { }
    get object() { return this._object; }
}
export class LocalAbsorber extends Absorber { absorb() { this.object.step(); } }
export class GlobalAbsorber extends Absorber { absorb() { this.parent.clear(); } }
