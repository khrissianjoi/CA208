
## Relational Algebra

R, S relational table

### Select

σ (sigma) 

σpredicateR
 
_List all staff with salary greater than 10,000._
```SQL
σSalary > 10000(Staff )
```  

### Project

π (pi)

The PROJECT operation, unlike SELECT, selects certain columns from the table and discards the other columns.

π<attributelist >(R)

_List of salaries for all staff, showing only the staffNo, fName, lName, and salary details._
```SQL   
πstaffNo, fName, lName, Salary(STAFF)
```  
_List of first name, last name, and salary of all employees who earn above 10000._
```SQL  
πstaffNo, fName, lName, Salary(σSalary > 10000(STAFF))  
```  

### Type Compatability

π product operation used.

#### Union

_List all cities where there is either a branch office or a property for rent._
```SQL   
πcity (Branch) ∪ πcity (PropertyForRent)
```   
#### Minus (Set Difference)

_List all cities where there is a branch office but no properties for rent._

|πcity(Branch) − πcity(PropertyForRent)|
| - | 
#### Intersection
_List all cities where there is a branch office and also properties for rent._

|πcity(Branch) ∩ πcity(PropertyForRent)|
| - |

### Product

× 

_List the names and comments of all clients who have viewed a property for rent._
- The names of clients are held in the Client relation and the details of viewings are held in the Viewing relation.

combine relations Client and Viewing
|π(clientNo, fName, lName<sup>(Client)</sup>) × (πclientNo, propertyNo, comment<sup>(Viewing)</sup>)|
| - |

select Client.ClientNo = Viewing.clientNo only
|σClient.clientNo = Viewing.clientNo((πclientNo, fName, lName<sup>(Client)</sup>) ×(πclientNo, propertyNo, comment <sup>(Viewing)</sup))|
| - |
### Join

#### Theta Join

Theta join contains cartesian product (×) and selection (σ sigma)

| R ⋈ S<sub>F</sub> = σ<sub>F</sub> (R × S) |
| - |

#### Equijoin operation

_List the names and comments of all clients who have viewed a property for rent._
```SQL
(πclientNo, fName, lName(Client)) ⋈ Client.clientNo=Viewing.clientNo (πclientNo, propertyNo, comment (Viewing))
```

#### Natural Join
```SQL
πclientNo, fName, lName(Client) ⋈ (πclientNo, propertyNo, comment (Viewing)
```
