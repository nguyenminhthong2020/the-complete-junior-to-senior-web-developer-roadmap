# SSH - The 3 techniques

## Symmetrical Encryption

The symmetrical encription technique, works through sharing only a decrypt/encrypt key, through key exchange algorithm, that turn data secure but if someone takes that key, during the first communication(handshake) when the key is shared, then the data is at risk(man-in-the-middle).

## Asymmetrical Encryption

This technique works through, 2 decrypt keys and 2 encrypt keys, the encrypt keys are shared through client-server communication, they keep they respective decrypt key and share they encrypt key, then when the communication happen, they encrypt the data with the other machine key they receveid and send this data, the other machine receive the encrypted data, and decrypt with his unique decrypt key, and vice-versa.

__Diffie Hellman algorithm__ best explanation:https://youtu.be/Yjrfm_oRO0w

## Hashing

It's like bcrypt, one way encryption, impossible to go back once encrypted. Like 26 x 59 = 1534, If you get the 1534 value, how you going to know that was a result of 26x59? That's a simple example.

### Resume

- Diffie Hellman key exchange
- Arrive at symmetric key
- Make sure of no funny business
- Authenticate User

### SSH on github (Windows)
https://github.com/antonykidis/Setup-ssh-for-github/blob/master/Setup-ssh-on-github.pdf