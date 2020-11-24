# My studies for this project

### Enterprise Java Beans (EJB)

Server-side software component that encapsulates business logic of an application.

### Session Beans

- Business Rules
- @Stateless
    - Used to implement business rules
    - Can be accessed Local or Remote
        - Local
            - Does not need to create an interface with the methods
            - If create, must note with: @Local (InterfaceName.class)
        - Remote
            - Accessible from other computers
            - Need to create an interface with methods
            - Must note with: @Remote(InterfaceName.class)
    - Doesn't keep state
    - The operation needs to be finished in only one call
    - Ex: Consult or insert data

    ### Implementation example:
```
    @Stateless
    public class BibliotecaBean {
        public int somar(int a, int b) {
            
            return a + b;
        
        }

        public int subtrair(int a, int b) {

            return a - b;

        }
    }

    @Named
    @RequestScoped
    public class CalculosMB {

        @Inject
        private Bibliioteca biblioteca;

        private int resultado;

        public void calcular() {

            this.resultado = this.biblioteca.somar(10, 20);

        }

    }
```

    - To use this library the notation @Inject (or @EJB) need to used to inject the Bean
    - The container inject the correct dependency
    - After it's just use the injected object
    - Can be used in:
        - Servlet
        - ManagedBean
        - Bean
        - Pojo

- @Stateful
    - Used to implement business rules
    - Keep state
    - Can't handle any client, because need to keep their data (state) by client
    - Can be accessed Local or Remote
    - Ex: Shopping cart

    ### Implementation example
```
    @Stateful
    public class CarrinhoBean {
        private Set<Produto> produtos = new HashSet<Produto>();
        public void adicionar(Produto p) {
            this.produtor.add(p);
        }

        public void remover(Produto p) {
            this.produtos.remove(p);
        }
    }
```

- @Singleton
    - The EJB Containner create only one Bean instance
    - Keep only one instance while all the application
    - Share data between all the application users
    - Can be accessed Local or Remote
    - Ex: Users count, Cache, Shared data...

    ### Implementation example
```
    @Singleton
    public class ContadorBean {
        private inc contador = 0;

        public void adicionar() {
            this.contador++;
        }

        public int getContador() {
            return this.contador;
        }
    }
````

### Message-driven Beans

    - @MessageDriven
        - Bean with tha capacity of processing async messages
        - Act like a JMS Listener: 
            - JMS - Java Messaging System
            - Receive and consume JMS messages
            - Proccess the messages
        - JMS Architecture
            - JMS Provider: Java EE implementations with JMS support
            - JMS Clients: Applications or components to create and consum messages
            - Messages: Communication objects between two JMS Clients
            - Managed objects: JMS configurated objects to client use - destiny and serder of connections (connection factories)
        
    ### Message types

    - Point-to-Point
        - Emitters, Receivers and queues
        - Each message had only one consumer
        - Each message is addressed to a specific queue
        - Receivers take their messages from specific queue
        - Queue await all the messages to be consumed or expired
    
    - Publish/Subscribe
        - Emitters send messages to a topic
        - A topic may have many subscribers
        - Beans may subscribe topics
        - Topics await the messages to be consumed
        - The Bean needs to be active  to consume the topic messages

    ### Message consum

    - Sync
        - The consumer get the message calling ```receive()```
        - ````receive()``` blocks until the message is obtained, or expired if the message does not arrive within a certain time

    - Async
        - An application may register a Message listener as message consumer
        - Aways a message arrive, the method ```onMessage()``` from listener is called
        - On JavaEE, the MDSs act like Message Listeners