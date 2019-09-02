if you see "current Problem.jpg" I can tell that the following is occurring leading to double and triple counting.
- the bust over Winning number occurs
- userNumberSum is reset to 0 successfully,
- and then the rupee value is added to UserNumberSum immediately being that it is the second game
- WTF

SOLVED: The problem was that the rupee functions existed within the start game function, after removing them, all is good