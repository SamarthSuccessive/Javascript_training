# 12-Factor APP

12-factor app is a methodology or set of principles for building the scalable and performant(functional), independent, and most resilient(if system failure happens the app) enterprise applications.

The 12 Factor App is a set of principles that describes a way of making software that, when followed, enables companies to create code that can be released reliably, scaled quickly, and maintained in a consistent (version releases) and predictable manner.

It establishes the general principles and guidelines for creating robust enterprise applications.
These are the conceptual solutions for the problems

12 factors are :

1) Codebase (One codebase tracked in revision control, many deploys)
2) Dependencies (Explicitly declare and isolate the dependencies)
3) Config (Store configurations in an environment)
4) Backing Services (treat backing resources as attached resources)
5) Build, release, and Run (Strictly separate build and run stages)
6) Processes (execute the app as one or more stateless processes)
7) Port Binding (Export services via port binding)
8) Concurrency (Scale out via the process model)
9) Disposability (maximize the robustness with fast startup and graceful shutdown)
10) Dev/prod parity (Keep development, staging, and production as similar as possible)
11) Logs (Treat logs as event streams)
12) Admin processes (Run admin/management tasks as one-off processes)


1) Codebase: there should be exactly one codebase for a sevice for many deployments and it will be accessible to the devloping ,testing,an system administration staff.
For example github.

The Codebase principle states that all assets related to an application, everything from source code, the provisioning script, and configuration settings, are stored in a source code repository that is accessible to development, testing, and system administration staff.

2) Dependencies:

Explicitly declare and isolate the dependencies.
Advantage:    1)segregation 
              2)Loosly Coupling
example: packet.json in react js .

One benefit of explicit dependency declaration is that it simplifies setup for developers new to the app. The new developer can check out the app’s codebase onto their development machine, requiring only the language runtime and dependency manager installed as prerequisites. They will be able to set up everything needed to run the app’s code with a deterministic build command. 

Applications should explicitly declare their dependencies and use a dependency management tool to manage them. This ensures that the application's dependencies are isolated and can be easily installed on any environment.

3) Config:

Store the config in the environment
Maintain in environment variabkes and default values'
DB ,Myql_users URL;
Store configuration in the environment. Configuration such as credentials, database URLs, and API keys should be stored in environment variables. This allows for configuration to be easily changed without modifying the code.

For Exampe:In config gile store the database url and if something changes happens then only change in the config file ot in the code .

4) Backing Services:

 a backing service is like a specialized tool or resource that the application relies on to perform certain tasks, such as storing data, sending emails, or processing messages.
 for example baking the cake ,so oven here is the backing service .

 For example, a MySQL database is a resource; two MySQL databases (used for sharding at the application layer) qualify as two distinct resources. The twelve-factor app treats these databases as attached resources, which indicates their loose coupling to the deploy they are attached to.
 like when we wantd to add new database then without doing the changes in the code we can do that 

 5)Build, release, run: 

 code base transformed to deploy by 3 stages:
 a)build stage
 b)release stage 
 c)run stage

Build stage: transform the code into an executable bundle/ build package.

Release stage: get the build package from the build stage and combines with the configurations of the deployment environment and make your application ready to run.

Run stage: It is like running your app in the execution environment.

6)Processes :

The "Processes" factor in the 12 Factor App methodology emphasizes running applications as one or more stateless processes. This means that each process does not retain any state or data between requests. Instead, any data necessary for processing a request is either passed along with the request or stored externally (e.g., in a database).

By running applications as stateless processes, it becomes easier to scale horizontally, which means adding more instances of the application to handle increased traffic.

7)Port binding:

Applications should export services via port binding, allowing them to be accessed from outside the container or environment.
Example :Using the port 3000 for everyone outside
 
8)Concurrency:

The principles of a twelve-factor app recommend considering running your application as multiple processes or instances rather than as a single, monolithic system.

9)Disposability:Applications should be designed to start up quickly and shut down gracefully, allowing for easy scaling and deployment.

10)Dev/prod parity:
The twelve-factor methodology suggests keeping the gap between development and production environment as minimal as possible. This reduces the risks of showing up bugs in a specific environment.

11)Logs:
Logs should be treated as streams of events that can be collected, aggregated, and analyzed to provide insights into the application's behavior.

12)Admin processes: Run admin/management tasks as one-off processes.

It means that applications sometimes need to perform one-off tasks before starting their regular operations. These tasks are infrequent, so we typically create a script for them and run it from a different environment.


## Atomic Design:

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.
By breaking down your interface into smaller, reusable components, you can ensure that your site is more maintainable and scalable over time, and that it has a consistent look and feel.

The five stages of atomic design are:.

(1) Atoms - Atoms are the most basic components. They are the building blocks Basic HTML elements of design such as buttons, lines, shapes, icons, etc.

(2) Molecules - In design, a molecule can be created by combining two or more atoms. For instance, an input field and a button can combine to become a search form, which can perform the search function on the interface.

(3) Organisms - An organism is a collection of molecules that have been bonded together to form complex individual portions of the design such as a login page, form, nav bar etc.

(4) Templates - Templates are the glues that combine the different organisms or individual sections to create a complete design.For example, the search form (organism) can be used as a template in the hero section of our home page to fetch user information. 

(5) Pages - Pages are specific instances of templates that show what a UI looks like with real representative content in place.The page stage is the most concrete stage of atomic design, and it’s important for some rather obvious reasons. After all, this is what users will see and interact with when they visit your experience. 






