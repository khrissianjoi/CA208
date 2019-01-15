
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
 
<pre>πstaffNo, fName, lName, Salary<sup>(STAFF)</sup></pre> 
_List of first name, last name, and salary of all employees who earn above 10000._

<pre>πstaffNo, fName, lName, Salary(σSalary > 10000<sup>(STAFF)</sup>)</pre>

### Type Compatability

π product operation used.

#### Union

_List all cities where there is either a branch office or a property for rent._   
<pre>πcity<sup>(Branch)</sup> ∪ πcity<sup>(PropertyForRent)</sup></pre>

#### Minus (Set Difference)

_List all cities where there is a branch office but no properties for rent._

<pre>πcity(Branch) − πcity(PropertyForRent)</pre>

#### Intersection
_List all cities where there is a branch office and also properties for rent._

<pre>πcity<sup>(Branch)</sup> ∩ πcity<sup>(PropertyForRent)</sup></pre>

### Product

× 

_List the names and comments of all clients who have viewed a property for rent._
- The names of clients are held in the Client relation and the details of viewings are held in the Viewing relation.

combine relations Client and Viewing
<pre>π(clientNo, fName, lName<sup>(Client)</sup>) × (πclientNo, propertyNo, comment<sup>(Viewing)</sup>)</pre>

select Client.ClientNo = Viewing.clientNo only
<pre>σClient.clientNo = Viewing.clientNo((πclientNo, fName, lName<sup>(Client)</sup>) × (πclientNo, propertyNo, comment <sup>(Viewing)</sup>))</pre>
 
### Join

#### Theta Join

Theta join contains cartesian product (×) and selection (σ sigma)

<pre>R ⋈ S<sub>F</sub> = σ<sub>F</sub> (R × S)</pre>

#### Equijoin operation

_List the names and comments of all clients who have viewed a property for rent._

<pre>(πclientNo, fName, lName(Client)) ⋈<sub>Client.clientNo=Viewing.clientNo</sub> (πclientNo, propertyNo, comment (Viewing))</pre>

#### Natural Join

_List the names and comments of all clients who have viewed a property for rent._

<pre>πclientNo, fName, lName<sup>(Client)</sup>⋈ (πclientNo, propertyNo, comment<sup>(Viewing)</sup>)</pre>

#### Outer Join

_Produce a status report on property viewings._

<pre>πpropertyNo, street, city<sup>(PropertyForRent)</sup>) ⋊ Viewing</pre>


