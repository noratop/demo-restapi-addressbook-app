# Loopback Workshop

## Getting started
1. Make sure to re-read all the instructions provided in https://github.com/DecodeMTL/loopback-rest-api-demo
2. Install the StrongLoop command-line tool
3. Generate a new Loopback application using the `slc` tool
4. **READ ALL THE INSTRUCTIONS HERE BEFORE GETTING STARTED** (up to the challenge)

## Main exercise: Create an address book API
Using your newly acquired knowledge, re-create your own address book API. Your API should expose access to the following models, where * means required:

1. AddressBook (name*=string)
2. Entry (firstName*=string, lastName*=string, birthday=date)
3. Address (type*=string, line1*=string, line2=string, city*=string, state*=string, zip*=string, country*=string)
4. Phone (type*=string, phoneType*=string, phoneNumber*=string)
5. EmailAddress (type*=string, emailAddress*=string)

Once the models are created, play with the API Explorer to get a feel for the creation (POST), modification (PUT) and listing (GET) of your models. Then, create the following relationships:

1. AddressBook -> hasMany -> Entry
2. Entry -> hasMany -> Address
3. Entry -> hasMany -> Phone
4. Entry -> hasMany -> EmailAddress

Once the relationships are created, add a MySQL datasource to your app, and connect your models to it. Then, using the API Explorer, add some address books and entries to your database.

Then, read the [Querying Data](https://docs.strongloop.com/display/public/LB/Querying+data#Queryingdata-Using%22stringified%22JSONinRESTqueries) documentation, especially the "JSON in REST queries" part, as well as the [loopback-filters](https://github.com/strongloop/loopback-filters#features) documentation. Based on that, try to make queries for the following:

1. List all entries ordered by first name
2. List the first 10 entries ordered by last name
3. List the second "page" of 10 entries ordered by last name
3. List all entries where the first name is "John"
4. List all entries where the first name *contains* "John"
5. List all address books [including](https://docs.strongloop.com/display/public/LB/Include+filter) their entries
6. List all address books [including](https://docs.strongloop.com/display/public/LB/Include+filter) their entries, as well as all the addresses, emails and phone numbers associated

For each query, write a new line in a file called `queries.txt` and include it in your submission. Each line will start with `filter=` and contain the JSON filter you used for that query.

Once you have done all of this, push your project on GitHub and notify us so we can take a look. **We suggest doing many commits along the way, not one big commit at the end of your work!**

## Challenge #1
Using [`jQuery.ajax`](https://api.jquery.com/jquery.ajax/), create a tiny web page that shows all the address books in your API

## Challenge #2
Using [`jQuery.ajax`](https://api.jquery.com/jquery.ajax/) and an HTML form, create a tiny web page that lets the user add Entries to the AddressBook with ID=1 :)
