import Vector3 from './vector3';
import LocalInformation from './local-information';

export default class Environment {
    private _objects: any[];
    constructor(public parent: Environment, _objects: any[]) {
        this._objects = _objects || [];
    }
}
