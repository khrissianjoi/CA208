## Methodologies
### Object Oriented Development
- Suited to process oriented systems implemented in OO environment
- “systems that are strongly database-oriented……are not ideally suited to object oriented development”
- Requires high level of expertise
- Often used for customisable packages (e.g. SAP)
### RAD
- Iterative development
- Process and user expectations must be carefully handled
- Can be used in conjunction with Structured Methods
- Particularly suited to small projects and user interface development
- DSDM

### Structured Systems Analysis & Design Method (SSADM)
Each of the three system models provides a different viewpoint of the same system, 
each of which are required to form a complete model of the system. 
Within SSADM, each of the three techniques is *cross-referenced* against the others to ensure the completeness and accuracy 
of the complete model.

**The Data/Structure View:**
- a description of all the data and information the system uses (gained from the DFDs above)

**The Process View:**
- a description of all the processes or actions carried out by the system (taken from the process descriptions and the process catalogue)

**The Event/Time View:**
- a description of the systems events, that is the 'triggers' that set processes running (from the Entity life histories)
  
Taking these different views allows us to gain much more information about the system than we could have done otherwise.

### Methods for capturing software system requirements:
These techniques are used to uncover all requirements and build support and trust among users.
- **Interviews:**
  - select people to interview
  - design interview questions
  - prepare for the interview
  - perform the interiew
  - follow-up after the interview
- **Joint Application Development:**
  - joint user analyst meeting hosted by a facilitator
  - anonymoulsy or electronically
  - careful planning, users may need documents
  
- **Questionnaires:**
  a set of written (paper or electronic) questions used to obtain information from individuals
  - select participants
  - design, careful question selection, remove ambiguities
  - administering the questionnaire (free pens)
  - follow-up, thank you message
  
- **Document Analysis:**
  - review technical documents when available
  - review typical user documents (forms, reports, policy manual)
  - look for user additions to froms
  - look for unused form elements
  
- **Observation**

 #### Factors that contribute to uncertainty: ####
 - bad organisational factors (unclear roles, dissagreement, diverse users)
 - very complexapplication
 - inexperienced users
 - inexperienced analysts

_____________________________________________
## Business Activity Model

### Business Activity Modelling
Network of activities

Pictorial representation of the business.

**Purpose:**
- Helps pick out the requirements, focus on the areas of concern. 
- Puts the system in perspective, helps to inform the client what is possible.
- It can increase user participation and encourage users to build a sense of ownership for the future system.
- Defines *what* and *when* of the business activity.
    
### Work Practice Modelling
**Purpose:**
- Defines *who*, *where*, *how*, and (maybe) *why* of the business activity. 
-  responsibilities to humans.
Products include: User Catalogue, Task Models, Task Scenarios, and User Roles.
  
### Hierarchical Task Model
The arrangement of the activties/tasks (from the BAM) in a hierarchy.

**Purpose:**
- Validating Task Models.
    
### User Catalogue
Documenting job title and business activities of each jobholder (user). A summary of the Work Practice Model arranged by 
job title.

**Purpose:**
- Identify relevenat jobholders (users)
- Define the outward appearance of the new system.
 Coloumns: Job Title, Responsibility (Job Activity)
   
   
______________________________________________________

## Logical Data Model
### Logical Data Modelling
Vehicle for analysising the logical structure of an organisation's information.
Graphical representation of information, its relations to other information and business concepts.

**Consists of:**
- Logical Data Structure (LDS)
- Textual description explaining all parts of the LDS

**Validating LDM:**
LDM must provide access to all data items required by each update or enquiry process.

### Entity
EXAMPLE
```
Entity Type:           Occurances/Attributes:
 Supplier               Supplier No
                        Supplier Name
                        Supplier Address
```    
Must be occurances > 1
Occurances of that entity must be unqiuely identifiable.

### Relationships

(m:n) - ><

(1:m) - -<

(1:1) - ___ 

optionality (dash): supplier ----< purchase order

**Redundant Relationships:**
- Unnecessary relationships, will involve in maintainenance overhead if implemented
can be removed: 
*Explain how M:N, 1:1 and redundant relationships can be removed from an LDS and
update your LDS from 1(a) to reflect this. ????*

**- Reflexive Relationship:**
1:1 replationship
example: Pig's Ear, Product (entity) 'substitution'

______________________________________________________

## Data Flow Modelling
### Data Flow Diagrams
**Validating Data Flow Diagrams:**
- Has each process (middle) a strong imperative verb and object?
- Have all data stores flows in and out?
- Can the flows be reduced?
- Do external entities communicate with at least one process?
- Does the user think that it is an accurate portrayal of the business area?
- Are the input data flows related to the output data flows?
- Are symbols correctly labelled and uniquely referenced?

### Context Diagram
External entities represents the outside world
### Document Flow Diagram
**Purpose:**
Illustrates the flow of physical documents associated with the area being investigated. 

**Process (5 steps):**
- Identify recipients and sources of documents (inside or outside boundry).
- Identify documents which connect recipient and source.
- Convert each source and recipient into an external entity symbol.
- Add data flow to represent each connecting document.
- Add system boundary (exclude external entities found in context diagram).

### Levelling
- Each lower level explains a single process from the level above.
- All inputs and outputs to a process on the higher level appear in the lower level.
- The lower levels do not repeat information in a higher level diagram.
- You can use as many second level diagrams you think that are necessary.

______________________________________________________

### Entity Life History

**Purpose:**
Documents all of the events that can affect an entity. 
Analysis - to show the consideration of the occurances of the entity (updates and current states)
Design - program specification

- **Quit and Resume:**
  - quit - to allow for the fact that a cancellation can take place any time.
 
 
______________________________________________________

## Coupling and Cohesion

**Design concept** (FICPCLC):
  - Functional
  - Informational
  - Communicational
  - Procedural
  - Classical
  - Logical
  - Coincidental



