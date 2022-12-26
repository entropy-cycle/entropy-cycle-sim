import Vector3 from './vector3';
import Environment from './environment';
import { LocalRadiator } from './radiator';
import { LocalAbsorber } from './absorber';

export default class Dipole extends Environment {
    public position: Vector3; // the position of the dipole.
    public velocity: Vector3; // the velocity of the dipole.
    public radiator: LocalRadiator; // the radiator of the dipole.
    public absorber: LocalAbsorber; // the absorber of the dipole.
    constructor(public parent: Environment, _env: any) {
        super(parent, []);
        if(_env) {
            _env.objects.forEach(obj => this.add(obj));
            this.position = _env.position;
            this.velocity = _env.velocity;
            this.time = _env.time;
        }
        else {
            this.position = new Vector3(0, 0, 0);
            this.velocity = new Vector3(0, 0, 0);
        }
        this.radiator = new LocalRadiator(this, this);
        this.absorber = new LocalAbsorber(this, this);
    }

}