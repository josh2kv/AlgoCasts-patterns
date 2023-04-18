# Fruits into Baskets (medium)

> *Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.*
>
> *You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.*
>
> *Write a function to return the maximum number of fruits in both the baskets.*
>
> |  |   |
> | :--------: | :---: |
> | **INPUT**  | Fruit=['A', 'B', 'C', 'B', 'B', 'C'] |
> | **OUTPUT**   | 5 |
> | **Explanation** | We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C'] |

 | No  | Algorithm | Time Complexity | Space Complexity |
 | :-: |:--------: | :-------------: | :--------------: |
 | 01  | Sliding Window | N | O(1) |
