# MERN-Blog-Application
## Problem Statement

Build a Blogging application using MERN stack.

It should be a multi user app where multiple users can have their own multiple blogs.

Backend

Take care of Authentication - Only logged in users should be able to read any blog or do any of the CRUD actions.

A logged in user should be able to see/read all the blogs created by anyone.

Create :

Each Blog created by a user, should at least have a

Title - For Example : “My Journey at MasaI”,
Category - For Example : “Career”/”Finance”/”Travel”/”Sports” etc.
Author - For Example : “Albert”/”Manish”/”Santhi”/”Bob” etc.
Content - For Example : “A paragraph of content….etc”
Image(Optional) - Any related image for that blog.
Store the data in MongoDB (use Atlas)

Establish a relationship so that a user is able to Update and Delete only his/her blogs.

Read :

All logged in users should be able to read any/all the blogs, even those blogs created by other users.

End Points :

/blogs - should give all the blogs (only for the logged in users)

/blogs?category=career - should give only those blogs whose category is career

/blogs?author=ankur&category=finance - should give only those blogs whose author is ankur and the category is finance.

And so on…. The Above are just examples, all possible combinations should work like filtering by category OR/AND author or filtering only by category OR only by author etc etc

Update :

Users should be able to update/modify/edit any of only their blogs - modify title/category/content etc.

Delete :

Users should be able to delete any of only their blogs.

Mandatorily - Take care of all good practices like send status codes, MVC structure, encrypt passwords, use jwt for token etc

NOTE - For encryption, Use bcryptjs (https://www.npmjs.com/package/bcryptjs) and don't use bcrypt. bcrypt seems to have some issue in the library that may give error during deployment

Frontend

Create a React app, where a user can sign up/login using the API created in the Backend for Authentication.

Once logged in, redirect the user to the “Blogs” page.

In the “Blogs” page, a user should be able to see all the blogs.

A user should be able to create a new blog, update and delete a blog(Only his/her blog obviously).

Have a filter in UI, to filter blogs by author, category - etc and use the right API endpoints to get filtered data from backend. (Filtering should happen in backend, don’t get all the blogs and then filter in frontend, get only the filtered blogs by using the right API endpoint)