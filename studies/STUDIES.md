# My studies for this project

- Enterprise Java Beans (EJB) - Is a server-side component that ENCAPSULATES the BUSINESS LOGIC of an application. The business logic is the code that fulfills the purpose of the application. It DOES NOT perform display of business data (presentation) or perform operations directly the database (persistance).
- Enterprise Service Bus (ESB) - Implements a communication system between mutually interaction software application in a service-oriented architecture (SOA). It represents a software architecture for distributed computing, and is a special variant of the more general client-server model, wherein any application may behave as server or client. ESB promotes agility and flexibility with regard to high-level protocol communication between applications. Its primary use is in enterprise application integration (EAI) of heterogeneous and complex service landscapes.
    - Messaging Queue!!!!!
        - All the "requests" goes to a queue to not get lost if some service is offline, when the service is up again then the request is made.

    ESB Provides:

    - Routing Services
    - Message/Data transformers
    - Security via authentication
    - Logging services

- Apache CFX

    Apache CFX is an open-source, fully featured Web services framework. 

    CXF is a services framework. It allows you to create SOAP, REST and even CORBA services. It is a component used inside Camel, CXF is not a subset of Camel. Camel will allow you to provide and consume web services using CXF.

- Apache Camel

    Apache Camel is a powerful open source integration framework based on
    known Enterprise Integration Patterns with powerful Bean Integration.

    Camel lets you create the Enterprise Integration Patterns to implement routing
    and mediation rules in either a Java based Domain Specific Language
    (or Fluent API), via Spring based Xml Configuration files or via the Scala DSL.
    This means you get smart completion of routing rules in your IDE whether in
    your Java, Scala or XML editor.

    Camel is a EIP (Enterprise Integration Pattern) framework which allows you to do things such as route a file to a web service. Or expose a SOAP service that talks to JMS queues. 

    Camel orchestrates the various components into routes that allows various systems to integrate.
