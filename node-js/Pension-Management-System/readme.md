docker run -p 5672:5672 rabbitmq

mongod in one cmd window
mongo in the other

nodemon for each microservice

process pensioner is outputed in the terminal after running 
http://localhost:5001/pensioner/process/adhaar-number
as POST method
process pension mincroservice 

most crud operations use same url (check each index.js file for corresponding port number)

create user URL 
http://localhost:5000/auth/reg

followed with this syntax
{
    "name": "colin",
    "email": "colin@gmail.com",
    "password": "admin"
}

login is the same but without the name parameter

create url require authentication aquired from the login
syntax:
{
    "name": "ben",
    "date_of_birth": "14/12/1971",
    "pan": 1234567,
    "aadhaar": 24523678,
    "salary_earned": 56000,
    "allowences": 98000,
    "self_family_pension": "family",
    "bank_detail": {
        "bank_name": "bank of ireland",
        "account_number": 7654321,
        "public_or_private": "public"
    }
}


