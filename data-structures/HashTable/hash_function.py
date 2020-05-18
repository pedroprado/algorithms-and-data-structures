from random import random
from random import randint

#Characteristics of HASH FUNCTIONS
# 1.FAST and CONSTANT: hash functions need to be fast and have constant time complexity!
# 2.UNIFORM: Distribute things uniformly=> things must be stored in diferent spots! (Same spot = collisions)
# 3.DETERMINISTIC = for same input we always have the SAME OUTPUT

#BAD EXAMPLE : SLOW => it has a long loop!
def hash1(key):
    for i in range (0,10000):
        print(i)
    return key[0]
    

#BAD EXAMPLE : NOT UNIFORM => maps every key to the same value!!
def hash2(key):
    return 0;    

#BAD EXAMPLE: NOT DETERMINISTIC => random number do not provide a deterministic result (we always get a different output!
def hash3(key):
    #  random.seed(key)
     return randint(0, 10)

