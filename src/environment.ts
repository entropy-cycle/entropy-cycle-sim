import Vector3 from './vector3';
import Field from './field';
import LocalInformation from './local-information';

/**
 * The Environment class is the base class for all objects in the universe. all objects in the universe are defined by their:
 * 
 * 1. entropy (information)
 * 2. non-local potential (quantum vacuum)
 * 3. local energy (localised dipole radiation)
 * 
 * The entropy cycle is defined by the following equations:
 * 
 * 1. entropy = entropy + entropy
 * 2. non-local potential = non-local potential + local energy
 * 3. local energy = local energy + entropy
 * 4. entropy = entropy + local energy
 * 
 * Written as a mathematical formula:
 * 
 * $$ \begin{align} S &= S + S \\ \Phi &= \Phi + E \\ E &= E + S \\ S &= S + E \end{align} $$
 * 
 */
export default class Environment {
    private _objects: any[];
    private _time: number = 0;
    constructor(public parent: Environment, _objects: any[]) {
        this._objects = _objects || [];
    }
    get objects() { return this._objects; }
    get entropy() { return this._objects.reduce((sum, obj) => sum + obj.entropy, 0); }
    get potential() { return this._objects.reduce((sum, obj) => sum + obj.potential, 0); }  
    get energy() { return this._objects.reduce((sum, obj) => sum + obj.energy, 0); }
    get field() { return this._objects.reduce((sum, obj) => sum.add(obj.field), new Field(this, new Vector3(0, 0, 0), new Vector3(0, 0, 0))); }
    get time() { return this._time; }
    set time(time: number) { this._time = time; }

    // the step function is called by the environment class to calculate the next step in the simulation.
    step() { this._objects.forEach(obj => obj.step()); this._time++; }

    // the clear function is called by the environment class to clear the field of all objects.
    clear() { this._objects.forEach(obj => obj.clear()); this._time = 0; }

    // the add function is called by the environment class to add an object to the field.
    add(obj: any) { this._objects.push(obj); }

    // the remove function is called by the environment class to remove an object from the field.
    remove(obj: any) { this._objects = this._objects.filter(o => o !== obj); }

    // the getLocalInformation function is called by the environment class to get the local information at a given position.
    getLocalInformation(position: Vector3, velocity: Vector3, keepObjects: boolean = true) { return new LocalInformation(this, position, velocity, keepObjects); }
}