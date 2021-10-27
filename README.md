## Things to do
- end frontend
- login 
- categorias
- deploy

# Alkemy Challenge

Running This App

From the home folder, run the following commands:

For the very first build:

    $ docker-compose build
    $ docker-compose up
    http://localhost:3001/build

this last one is to create the tables and insert data to the database

Every time after that:

    $ docker-compose up

- API server (Backend) should be running at http://localhost:3001
- client server(Frontend) will be running at http://localhost:3000 
- Postgresql database will be running at: 127.0.0.1:5432  
- pgAdmin will be running at http://localhost/login?next=%2F ,email "admin@admin.com" and password "admin"

To stop the services:

    $ docker compose-stop

To kill the services:

    CTRL + C and then $ docker compose-down


