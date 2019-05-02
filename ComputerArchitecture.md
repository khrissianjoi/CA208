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
The instruction in the delay slot is _always_ execute, whether the branch is take or not

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
