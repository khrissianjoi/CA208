
## Syntax

<b>Character from string using, index (int)</b>
```Java
char letter = word.charAt(index);
```
<b>Convert character (char) to string</b>
```Java
String word = Character.toString(letter)
```
<b>Length</b>
```Java
#length of string
String word =  'hello';
int word_length = word.length();

#length of list
int[] list_nums = [1,2,3,4,5];
int nums_length = list_nums.length; 
```
<b>Contains</b>
```Java
String word = 'hello';
boolean answer = word.contains('he');
```
<b>indexOf</b>
```Java
String word = 'hello';
int letter = word.indexOf('h'); #letter = 0
```
<b>Substring</b>
```Java
String word = 'hello there';
word = word.substring(0,6); #word = 'hello'
```
## Refactoring
<b>"Improving the design after it has been written."</b>
The process of restructuring existing code. Refactoring is intended to improve nonfunctional attributes of the software.
It is a controlled technique for _improving the design_ of the existing code base. It's essence is applying a series of small behavior-preserving transformations.
The cumulative effect of each of these tranformations is significant. These small steps _reduce the risk of introducing errors_.

Refactoring changes the programs in small steps. If you make a mistake, it is easy to
find the bug.
Refactoring helps you develop code more quickly.
You refactor because you want to do something else, and refactoring
helps you do that other thing.

### Steps in Refactoring
<b>Step 1:</b>
Build a solid set of tests for section of code (for human error).
The test will determine if bugs have been introduced.
Tests give security needed to change the program.
_Before starting to refactor, check that a solid suite of (self-checking) tests have been created._

## Object-Oriented Programming (OOP)

### Data Hiding
Data Hiding, a software development technique specifically used in OOP o hide internal object details (data members).
- Ensures exclusive data access to class members.
- Protects object integrity by preventing intended or unintended changes.
- Reduces system complexity.

### Coupling

### Unified Modeling Language (UML)
A standardised modeling language enabling developers to specify, visualise a software system.
The purpose of a <b>UML diagram</b> is for visual representation of a system.

![image](https://user-images.githubusercontent.com/34526517/56855735-4fdbac80-6944-11e9-8af1-88316d76c7f9.png)
