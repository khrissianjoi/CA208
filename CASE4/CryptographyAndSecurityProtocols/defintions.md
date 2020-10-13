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
