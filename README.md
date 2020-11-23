# Windows calculator clone with react and microservices

## About

To train some technologies, this application must to contain React in front end and microservices
in backend. 

Resumed list of the technologies:

	- React
	- Enterprise Java Beans (EJB)
	- Enterprise Service Bus (ESB)
	- Spring boot
	- Apache CXF
	- Apache Camel

I will write a separated document for each step of the development, my thoughts, decisions, difficulties
and anything else that comes to me.

In this first moment I will also write all my studies stuff the separated document inside 'studies' folder,
so if I haved some wrong perception of something anyone who see's this document can correct me.

## How this project is going to help me

Web development was not one of my stronger skills, so doing this project I will study and learn how
to create an entire UI using React, CSS and all the React stuffs commonly used in front end development.

Using microservices and all these architectures commonly used in back end development, I will study and 
learn how to create an entire REST API with routes, database, business rules and everything else.

## Design

The calculator design will be the Windows 10 calculator, just because I can see it opening the calculator.

## Tasks to be achieved

- Calculator program using EJB
- Write calculator program using Springboot, and expose the arithmetic operations as REST
- Using React create UI that will take two numbers and perform arithmetic operations
- REST invocation from React to perform arithmetic operations exposed in Springboot application
- Write an application in Spring boot that connects to a database and retrieves the customer details
- REST invocation from React -> Spring boot -> database
- Write an application in Spring boot that calls REST calls in ESB layer
- REST invocation from React -> Springboot -> REST to ESB
- Write a program using Apache CXF
- Write a program in Apache Camel

## How to run

### Front end

To run the front end for now (without containers), just need to have Node JS installed and run the following
commands inside front end folder:

	npm install
	npm start

And after that just check out the localhost.

### Back end
