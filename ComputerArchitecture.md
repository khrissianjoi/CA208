## MIPS Pipeline

The pipeline is a miniature graph of parallel-processing elements (instructions flow from node to node).

### 5 Stages:
<b>Fetch (IF):</b> 
- Fetch a new instruction every cycle

<b>Decode (ID):</b>
- Deconde instruction, generate control signals
- Read from register file

<b>Execute (EX):</b>
- Read ID/EX pipeline register to get values and control bits
- Perform ALU operation
- Computer targets
- Decide if jump/branch should be taken

<b>Memory Access (MEM):</b>
- Read EX/MEM pipeline register to get values and control bits
- Perform memory load/store if needed (address is ALU result)

<b>Write Back (WB):</b>
- Read MEM/WB pipline register to get values and control bits
- Select value and write to register file

## Branch

### "Branch Delay Slot"
The instruction in the delay slot is _always_ executed, whether the branch is taken or not

Reduces stalls.

## Stalls

### Read-After-Write (RAW) Stall
reading even though write has not happened

```
dadd r1,r2,r3
dsub r4,r1,r5
and r6,r1,r5
or r8,r1,r9
```

### Write-After-Write (WAW) Stall

```
dmul r3,r1,r2
dadd r3,r1,r2
```
- dadd is blocked by dmul
- r3 contains an incorrect final value when ddadd executes

## Forwarding

Improves performance at the cost of some additional complexity.

Eliminates data hazards involving arithmetic instructions.
- Forwarding detects hazards by comparing destination register of previous instructions to the source registers of the current instruction.
- Hazards are avoided by grabbing results from the pipeline registers before they are written abck to the register file.

## Speedup

### Amdahl's Law
```
p = portion of job affected by enhancement
s = speedup associated with p
speedup = 1/((1-p) + (p/s))
```

## Metric

### MTTF  (mean time to failure)
```
MTTF = 10^2
FailureRate = 1//MTTF ; per hour
```
### MTTR (mean time to repair)

- hours

### MTBF (mean time between failures)
```
MTBF = MTTF + MTTR
```
### Availability
```
Availability = MTTF / (MTTF + MTTR) ; usually quoted as a percentage

MTTF = 10^5
MTTR = 165 hours
Availability = 10^5 / (10^5+168)
```
## Code

<b>Compute the sum of even numbers up to the largest even number smaller than or equal to n,
example : 2 + 4 + 6 + ... n
R4 contains n (positive integer)
R2 contains final output</b>
```
.text
	daddi r4, r0, 10
	daddi r2, r0, 02
	daddi r6, r0, 02

loop:
	dadd r8, r8, r6
	beq r4, r6, finish
	j loop
	dadd r6, r6, r2
finish:
	halt
```

```
.data

arrayint:
	.word 01
	.word 02
	.word 03
	.word 04
	.word 05

.text
	daddi r5, r0, 48
	daddi r6, r0, 03
	ld r4, arrayint(r1) 
loop:
	dmul r4, r4, r6
	sd r4, arrayint(r1)
	daddi r1, r1, 8
	bne r5, r1, loop
	ld r4, arrayint(r1)
end:
	halt 
```
<b>MAX</b>

```
.data

arrayint:
	.word 56
	.word 10
	.word 32
	.word 00
	.word 04

.text
	daddi r5, r0, 48
	;daddi r6, r0, 00	;current max
	daddi r7, r0, 01
	ld r8, arrayint(r1)	;current min
loop_max:
	beq r1, r5, finish
	ld r4, arrayint(r1)
	slt r2, r4, r6		; (4 < 6 == 0)
	bne r2, r0, loop_max
	daddi r1, r1, 8		; while branch happening inc r1
						; else
	j loop
	dadd r6, r4, r0

finish:
	halt 
```
<b>Triangle</b>
```
.data
LENGTH:
	.word 0

TRIANGLE:
	.word 01
	.word 02
	.word 03

.text
	;daddi r1, r0, 8
	daddi r5, r0, 32
	ld r4, TRIANGLE(r1)
loop:
	dadd r6, r6, r4
	beq r5, r1, finish
	daddi r1, r1, 8
	j loop
	ld r4, TRIANGLE(r1)
finish:
	sd r6, LENGTH(r0)
	halt 
```
