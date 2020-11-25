# Detailed report from the development

In the point I started this report the front end it's almost complete
and I'm beggining all the back end.

I'll begin studing about Spring boot and microservices, to learn how
does this work and how I'm supose to use it in the back end to later
	add all the others archtectures and patters.

In this first moment I believe that microservices are individual 
servers with all the business rules and with some end points to 
access it.

I'm alternating between my desktop and the work lap top, and due to this
some configurations can be different, because I'm not being able to run
the application on the lap top, so I am going to see the environment 
variables and java versions of my desktop to set it in lap top too.

So on my hunting about what is wrong on my project I've found out the pom.xml
file is so important to build and run all the application, so I'm going to 
give it more attention from now.

The firt problem I solved in pom was the packaging, once seted to be 'pom',
but in this way I can't run the commands 'mvn spring-boot:run' and 
'mvn clean package' to create a .jar file.

After fixing the package from 'package src.main.java.com.calculator.back_end'
to 'package com.calculator.back_end' it starts to work running trought spring
boot dashboard, but I'm not able to create the .jar file yet due to the 
following error: 

	"Unable to find a suitable main class, please add a 'mainClass' property"

So after solving the package name problem I've just need to clean and repackage
the application, so I run the command 'mvn clean package spring-boot:repackage',
which clean everything and build it again, this time with no errors or warnings,
creating the .jar file and being able to execute with the command 'java -jar
example.jar'.

To suggested commands to create the .jar file are:

	mvn spring-boot:run
	mvn clean package

Following the get started guide from the Spring site, I found out some components
identified by the notation '@Component', and are commonly used on Spring boot
microservices.

According to the Spring boot get started, which use some of these components, the
components and meaning are the following:

	- @SpringBootApplication: is a convenience annotation that adds all of the following:
		- @Configuration: Tags the class as a source of bean definitions for the
		application context.

		- @EnableAutoConfiguration: Tells Spring Boot to start adding beans based on
		classpath settings, other beans, and various property settings. For example,
		if spring-webmvc is on the classpath, this annotation flags the application as
		a web application and activates key behabiors, such as setting up a
		DispatcherServlet.

		- @ComponentScan: Tells Spring to look for other components, configurations,
		and services in the 'com/example' package, letting it find the controllers.		
	
	- @RestController: Marks the class as a controller where every method returns a domain
		object instead of a view. It is shorthand for including both '@Controller' and 
		'@ResponseBody'.
 
	- @GetMapping: Ensures that HTTP GET request to /greeting (example), are mapped to the
		'greeting()' method.
		There are companion annotations for other HTTP vers (e.g.@PostMapping for POST).
		There is also a '@RequestMapping' annotation that they all derive from, and can
		serve as a synonym (e.g.@RequestMapping(method=GET)).

	- @RequestParam: Binds the value of the query string parameter 'name' into the 'name'
		parameter of the greeting() method. If the 'name' parameter is absent in the
		request, the 'defaultValue' of 'World' is used.

Now that I've finished the get started guide from Spring Boot, I'll put it on a new folder and
create a new back end project to advance with the application.

After completing the get started guide from Spring Boot site, I wrote a sum service, where it 
receives two numbers as parameters and return the sum of them. I tested it using the software
Postman and it returns the correct result. However some questions remain on my mind, about
Model and how to use it in the right way.

After learn how to configure and execute the Spring Boot code the subtraction service works
without any kind of problem, the remaining (multiply and division) must works with no problem
too.

All the arithmetic services are working, now I need understand a little bit more about EJB and
ESB, and see if I need to change something in the archtecture of my code.

I`m going to study and deploy the microservices and the front end and I`m going to start with front
end first, I already worked with Express to deploy, so I hope to be easy and fast.


