##Association:

- Definition: Association represents a relationship between two or more objects where they are connected but not necessarily dependent on each other.
- Nature: It can be a simple connection or a more complex relationship between objects, indicating how they are related.
- Multiplicity: It can be one-to-one, one-to-many, or many-to-many.
- Example: A 'Teacher' object associated with multiple 'Student' objects. Both entities exist independently.


##Aggregation:

- Definition: Aggregation is a specialized form of association that represents a 'has-a' relationship between objects, where one object is a part of another object.
- Nature: It implies that the child object can exist independently of the parent object.
- Multiplicity: It usually represents a one-way relationship where the parent object manages the lifecycle of the child object.
- Example: A 'University' object aggregating 'Department' objects. Departments can exist without the university and can be shared among different universities.


##Composition:

- Definition: Composition is a more rigid form of aggregation, where the child objects are considered as integral parts of the parent object.
- Nature: It implies a strong relationship where the child object cannot exist independently of the parent object.
- Multiplicity: It represents a strong ownership or containment relationship, typically one-way.
- Example: A 'Car' object composed of 'Engine,' 'Wheels,' and 'Chassis.' If the car is destroyed, its components are destroyed as well.


##Dependency:

- Definition: Dependency represents a relationship where one object uses another object, typically in a temporary or contextual manner.
- Nature: It is a weaker relationship and does not imply ownership or direct association.
- Multiplicity: It can be a one-way or bi-directional relationship.
- Example: A 'Class A' object using methods or objects from 'Class B' temporarily. If 'Class B' changes, 'Class A' might need to be adjusted but does not maintain a long-term relationship.