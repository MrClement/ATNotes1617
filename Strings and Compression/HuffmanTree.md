## Huffman Coding

Yesterday, we talked about losslessly compressing text via Huffman coding. This technique assigns different encodings to characters based on the frequency of occurrence in a given text.

You can find an example of this [here](https://www.siggraph.org/education/materials/HyperGraph/video/mpeg/mpegfaq/huffman_tutorial.html).

#### Your task

Write a program that reads a given file and builds a Huffman tree for the file. Given the string:

`The dog gandered at the gander.`

The tree looks like this:

![tree](test.png)
