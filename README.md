# Entropy Cycle simulation

## summary

This project implements a simulation of the entropy cycle in a quantum mechanical system. 

## components

The simulation includes the following components:

* Environment
* LocalInformation
* LocalAbsorber
* LocalRadiator
* GlobalAbsorber
* GlobalRadiator
* Dipole
* MonoPole
* TriPole

## entropy cycle

### definition

The entropy cycle is defined by the following equations:

1. entropy = entropy + entropy
2. non-local potential = non-local potential + local energy
3. local energy = local energy + entropy
4. entropy = entropy + local energy

### mathematical formula

Written as a mathematical formula:
$$ \begin{align} S &= S + S \\ \Phi &= \Phi + E \\ E &= E + S \\ S &= S + E \end{align} $$

## class hierarchy

class hierarchy:
```plantuml
@startuml
class Environment
class Absorber
class Radiator
class LocalInformation
class LocalAbsorber
class LocalRadiator
class GlobalAbsorber
class GlobalRadiator
class Dipole
class Monopole
class Tripole
class PointCharge
class BlackHole
class Star
class Planet
class Perceiver
Environment <|-- Absorber
Environment <|-- Radiator
Environment <|-- LocalInformation
Absorber <|-- LocalAbsorber
Radiator <|-- LocalRadiator
Absorber <|-- GlobalAbsorber
Radiator <|-- GlobalRadiator
Environment <|-- Dipole
Environment <|-- Monopole
Environment <|-- Tripole
Dipole <|-- PointCharge
Monopole <|-- BlackHole
Monopole <|-- Star
PointCharge <|-- Planet
Dipole <|-- Perceiver
@enduml
```
## sequence diagram

### creating the simulation

sequence diagram:
```plantuml
@startuml
actor User
participant Environment
participant LocalInformation
participant LocalAbsorber
participant LocalRadiator
participant GlobalAbsorber
participant GlobalRadiator
participant Dipole
participant MonoPole
participant TriPole
User -> Environment: create
User -> LocalInformation: create
User -> LocalAbsorber: create
User -> LocalRadiator: create
User -> GlobalAbsorber: create
User -> GlobalRadiator: create
User -> Dipole: create
User -> MonoPole: create
User -> TriPole: create
User -> Environment: run
User -> LocalInformation: run
User -> LocalAbsorber: run
User -> LocalRadiator: run
User -> GlobalAbsorber: run
User -> GlobalRadiator: run
User -> Dipole: run
User -> MonoPole: run
User -> TriPole: run
@enduml
```

### simluation steps

sequence diagram:
```plantuml
@startuml
actor User
participant Environment
participant LocalInformation
participant LocalAbsorber
participant LocalRadiator
participant GlobalAbsorber
participant GlobalRadiator
participant Dipole
participant MonoPole
participant TriPole
User -> Environment: run
User -> LocalInformation: run
User -> LocalAbsorber: run
User -> LocalRadiator: run
User -> GlobalAbsorber: run
User -> GlobalRadiator: run
User -> Dipole: run
User -> MonoPole: run
User -> TriPole: run
@enduml
```
