import Environment from './environment';

export class Radiator {
    constructor(public parent: Environment, private _object: Environment) {}
    radiate() { }
    get object() { return this._object; }
}
export class LocalRadiator extends Radiator { radiate() { this.object.step(); } }
export class GlobalRadiator extends Radiator { radiate() { this.parent.clear(); } }
