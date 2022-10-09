# Manga App

An app made with Ionic that displays manga's.

## Description

### Frontend:

The frontend was done with Ionic, it reaches the 4 endpoints of the backend that are the GET, PUT, POST and DELETE. It shows all the information of the object manga (minus the ID of course), has forms to post or update the same object (with the difference that in the update you can't change the image for security reasons), and has a button to delete said object. It also has a searchbar in which you can search mangas by their title, which wasn't explained in class.

### Backend:

The backend was done using Sequelize, in a MySQL database. It has the 4 methods of GET, POST, PUT and DELETE, plus an additional get one that is used in the update for the frontend when fetching, and another one which is commented, where you can get all the mangas of an specific genre, it replaces the find all and it can be changed to find any other genres in specific, this wasn't explained in class.

### Technology used

Ionic, sequelize and MySQL.

### Preview:

![Screenshot](PreviewApp.png)
![Screenshot](PreviewApp2.png)







