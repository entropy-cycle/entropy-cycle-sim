import Vector3 from './vector3';
import Environment from './environment';

/**
 * 
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
export default class LocalInformation {
    private _environment: Environment; // the environment that this local information is for.
    private _position: Vector3; // the position of the local information.
    private _velocity: Vector3; // the velocity of the local information.
    private _time: number; // the time of the local information.
    private _visibleObjects: any[]; // the objects that are visible from this position.
    private _mass: any; // the mass of the local information.
    private _temperature: any; // the temperature of the local information.
    private _wavelength: any; // the wavelength of the local information.
    private _deltaWavelength: any; // the delta wavelength of the local information.
    private _acceleration: any; // the acceleration of the local information.
    private _field: any; // the field of the local information.
    /**
     * constructor. creates a new local information object, calculating the local information at the given position.
     * and optionally including the objects that are visible from this position.
     * @param environment 
     * @param position 
     * @param velocity 
     * @param includeObjects 
     */
    constructor(environment: Environment, position: Vector3, velocity: Vector3, includeObjects: boolean) {
        this._environment = environment; // set the environment.    
        this._position = position; // set the position.
        this._velocity = velocity; // set the velocity.
        this._time = this._environment.time; // set the time.
        this._visibleObjects = []; // set the visible objects.
        this._mass = undefined; // set the mass.
        this._temperature = undefined; // set the temperature.
        this._wavelength = undefined; // set the wavelength.
        this._deltaWavelength = undefined; // set the delta wavelength.
        this._acceleration = undefined; // set the acceleration.
        this._field = undefined; // set the field.
        // loop through all the objects in the environment.
        for(let object of this._environment.objects) {
            // if the object is visible from this position, then add it to the visible objects.
            if (object.position.distanceTo(this._position) < object.radius) {
                const distance = object.position.distanceTo(this._position); // calculate the distance.
                const direction = object.position.clone().sub(this._position).normalize(); // calculate the direction.
                // calculate the velocity.
                const velocity = this._velocity.clone().add(this.acceleration.clone().multiplyScalar(this._time));
                // calculate the time.
                const time = distance / velocity.dot(direction);
                // add the object to the visible objects.
                this._visibleObjects.push({
                    object: object,
                    localPosition: object.getLocalInformation(this._position, this._velocity, false), // get the local information for the object.
                    distance: distance,
                    direction: direction,
                    velocity: velocity,
                    time: time,
                });
            }
        }
        // if we don't want to include the objects, then we need to calculate the mass,
        // temperature, wavelength, deltaWavelength, acceleration and field.
        if(!includeObjects) {
            this._mass = this.mass; // calculate the mass.
            this._temperature = this.temperature; // calculate the temperature.
            this._wavelength = this.wavelength; // calculate the wavelength.
            this._deltaWavelength = this.deltaWavelength; // calculate the delta wavelength.
            this._acceleration = this.acceleration; // calculate the acceleration.
            this._field = this.field; // calculate the field.
            this._visibleObjects = []; // clear the visible objects.
        }
    }
    get visibleObjects() {  return this._visibleObjects; } // get the visible objects.
    get environment() { return this._environment; } // get the environment.
    get position() { return this._position; } // get the position.
    get velocity() { return this._velocity; } // get the velocity.
    get time() { return this._time; } // get the time.
    get mass() { // get the mass.
        if(this._mass !== undefined) return this._mass;
        let mass = 0;
        for (let visibleObject of this._visibleObjects) {
            mass += visibleObject.object.mass;
        }
        return mass;
    }
    // get the temperature.
    get temperature() {
        if(this._temperature !== undefined) return this._temperature;
        let temperature = 0;
        for (let visibleObject of this._visibleObjects) {
            temperature += visibleObject.object.temperature;
        }
        return temperature;
    }
    // get the wavelength.
    get wavelength() {
        if(this._wavelength !== undefined) return this._wavelength;
        let wavelength = 0;
        for (let visibleObject of this._visibleObjects) {
            wavelength += visibleObject.object.wavelength;
        }
        return wavelength;
    }
    // get the delta wavelength.
    get deltaWavelength() {
        if(this._deltaWavelength !== undefined) return this._deltaWavelength;
        let deltaWavelength = 0;
        for (let visibleObject of this._visibleObjects) {
            deltaWavelength += visibleObject.object.deltaWavelength;
        }
        return deltaWavelength;
    }
    // get the acceleration.
    get acceleration() {
        if(this._acceleration !== undefined) return this._acceleration;
        let acceleration = new Vector3(0, 0, 0);
        for (let visibleObject of this._visibleObjects) {
            acceleration.add(visibleObject.object.acceleration);
        }
        return acceleration;
    }
    // get the field.
    get field() {
        if(this._field !== undefined) return this._field;
        let field = new Vector3(0, 0, 0);
        for (let visibleObject of this._visibleObjects) {
            field.add(visibleObject.object.field);
        }
        return field;
    }
}