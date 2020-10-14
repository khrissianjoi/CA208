#### Cryptosystems
A suite of **_cryptographic algorithms_** needed to implement a parcitular security service (achieve confidentiality)

#### Encrypt
The process of **_scrambling_** the data so that only authorised recipients an unscramble it.

#### Ciphertext
The result after encrypting (scrambling) a text.

#### Decrypt
The process of unscrambling the ciphertext to it's original message.

#### Cipher
The algorithm performing the encryption and decryption.

#### Cryptology
The study of cryptosystems. Subdivided in two branches: cryptography and cryptoanalysis.

#### Crpytography
The study of hidden writting (making secret codes). The art and science of conealing messages to introduce secrecy in information security.

#### Cryptoanalysis
The study of cryptographic mechanisms with the intention to break them (breaking cryptosystems). Also used during the design of new cryptographic techniques to test their security strength (find some insecurity in a cryptographic scheme).

### Forms of Encryption

#### Symmetric Encryption
Uses a **_single key_** to encrypt the plaintext to ciphertext and to decrypt the ciphertext back into plain text.
**Problems:** 
  - The key might be _stolen_ or _copied_ in transit.
  - A large number of keys is needed between communicating parties

#### Asymmetric Encryption
Created to solve symmentric encryption problems. Uses **_two keys_**, a public key and a private key.
- **Private key** is used to encrypt the plainttext into cyphertext
- **Public key** is used to decrypt the ciphertext into plaintext
The strength and security of asymmetric encryption depend on parties keeping their private keys well protected.

### Categories of Attacks

#### Passive Attacks
Main goal of a passive attack is to _**obtain unauthorised access to information**_.
Often seen as stealing information, the theft of data still leaves the owner in possession of the data.
This is more dangerous as information theft may go unnoticed by the owner.

#### Active Attacks
Involves **_changing the information_** by performing some process on the information:
Examples:
  - Unauthorised deletion of data
  - Modifying the information in an unauthorised manner
  - Denying access to information for legitimate users (denial of service)

### Cryptographic Attacks

#### Ciphertext Only Attack
Attacker has access to a set of ciphertext, but does not have access to the corresponding plaintext. Corressponding plaintext can be determined from a given set of ciphertext


#### Known Plaintext Attack
Attacker knows the plaintext for some parts of the ciphertext. The task is to decrypt the rest of the ciphertext using the information.

#### Chosen Plaintext Attack
Chooses the plaintext to be encrypted, has the ciphertext-plaintext pair of their choice. This simplifies the task of determining the encryption key.

#### Chosen Ciphertext Attack
Chooses the ciphertxt and can obtain its decryption.

#### Dictionary Attack
Attacker builds a table of ciphertext and corresponding plaintext that they have learnt over a period of time. They will refer to the dictionary/table to find the corressponding plaintext.

#### Brute Force Attack
Attacker tries to determine the key by attempting all possible keys.

#### Man in the Middle Attack
Attacker inserts themself in between the communication between two participants (A and B). The attacker masquerades as A to B, and as B to A, intercepting their communications and being able to decrypt them.

#### Replay Attack
In this type of attack, the attacker captures every piece of traffic between A and B during normal operation. Later, the attacker re-sends the first piece of traffic and waits for B’s response before sending the next piece, and so on. If B does not implement some protection against replay attacks, the attacker may be able to achieve a valid session with B while masquerading as A.
- Basically assuming that B will make a hiccup (no protection) as the attacker pretends to be A during their interaction.

#### Side Channel Attack
Exploit any weakness in the physical implementation of the cryptosystem.

#### Attacks in Reality
Attacks on the system administrators or users, where attackers gain access through subterfuge, susceptibility to greed, or through physical violence or threat of violence.

### Main Security Objectives

#### Confidentiality
Involves _**keeping information hidden**_ from those who are not entitled or authorised to see it. Ensuring privacy or secrecy is met by usually applying:
- physical securing of data
- access controls
- use of mathematical algorithms for data encryption

Example: encrypting the card number during transcation, so that during transimission the card number is encrypted from the buyer to the merchant (limiting the places where it might appear).

#### Integrity
Ensuring the **_data is accurate and trustworthy_**. Involves monitoring data throughout its lifecycle and identifying any intentional or unauthorised accidental alterations. Integrity checks cannot prevent the alteration of data.
Example: Making copies of a sensitive document, threatening the integrity of the information, as the data is at risk of change or modification.

#### Availability
Information **_can be accessed and modified only by authorised usesr in an appropriate time-frame_**.

#### Authentication
Provides the identification of the originator of a message. Confirms to the reciever that the **_data received has been sent only by an identified and verified sender_**.
Two variants:
- Message authentication identifies the originator of the message.
- Entity authentication is the assurance that data has been received from a specific entity, say a particular website.

#### Non-Repudiation
Ensure that an entity cannot refuce the ownership of a previous commitment or an action. Assurance that the original creator of the data cannot deny the creation or transmission of the data to a recipient (blame).
