import Environment from './environment';
import Vector3 from './vector3';

// the field class represents a field of force, potential, or energy. field objects are usually calculated by the environment class
// except in the cases where the environment was created by a dipole. in this case the field is calculated by the dipole class.
export default class Field {
    constructor(public environment: Environment, public position: Vector3, public strength: Vector3) {}
    public get force(): Vector3 { return this.strength;}
    public get potential(): number { return 0; }
    public get energy(): number { return 0; }
    clear() { this.strength = new Vector3(0, 0, 0); }
    add(field: Field): Field {
        this.strength = this.strength.add(field.strength);
        return this;
    }
}