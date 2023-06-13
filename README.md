# api-server

## class-04
1. Who was your partner? zainab malkawi
2. What was your key takeaway?

- Code review is a valuable practice to reinforce learning and improve code quality. It helps identify issues, understand the purpose of code, and provide constructive feedback.

- Collaborative learning: Engaging with a lab partner during code review allows for knowledge sharing and deeper understanding of different coding approaches and techniques.

- Documentation: Creating pull requests (PRs) and sharing them with partners,

3. Share the link to your PR request.
- pull request:  https://github.com/natali-alkayed/api-server/pull/6
- deploying url : https://food-ljzi.onrender.com

4. Share the link to their PR request.
- pull request:  https://github.com/ZainabMalkawi94/api-server/pull/6
- deploying url : https://api-server-x0d3.onrender.com/
___________________________________________________________________________________________________________
### Document the code review process
#### for me 
i have tow tables (food and ingredient) ,the relation between them is (one to one) ,the primary key in food table is (food id) and it is a forign key in ingredient table referencing food table.

- Food table:

| food_id (pk) | food_name      | 
| :----------- | :------------: | 
|  1           |    food 1      |     
|  2           |    food 2      |     

- Ingredients table:

| ingredient_id(pk)  | ingredients                  | food_id (fk)  |
| :-----------       | :--------------------:       | ------------: |
|  1                 |    food's 1 ingredients      |     1         |
|  2                 |    food's 2 ingredients      |     2         |



With this setup, each record in the ingredients table will be associated with a specific food item through the food_id foreign key. The uniqueness of the primary keys ensures a one-to-one relationship between the two tables.
___________________________________________________________________________________________________________
#### for zainab:

In a one-to-many relationship between two tables, "Authors" table and the "Book" table, each record in the "Authors" table can have multiple related records in the "Book" table, but each record in the "Book" table can be associated with only one record in the "Authors" table.

foreign key in the "Book" table that references the primary key in the "Authors" table. This foreign key would represent the association between an author and a books he have authored.


- Authers table:

| Auther_id (pk)  | Auther_name             | 
| :-----------    | :--------------------:  | 
|  1              |    food's 1 ingredients |          
|  2              |    food's 2 ingredients |    


- Book table:

| Auther_id (fk) | book-title     |  book-id       |
| :-----------   | :------------: | :-------------:|
|  1             |    book 1      |    book 1 id   |
|  2             |    book 2      |    book 2 id   |


___________________________________________________________________________________________________________
![testing](/food.png)



