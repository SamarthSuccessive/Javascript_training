12-Factor APP

12-factor app is a methodology or set of principles for building the scalable and performant(functional), independent, and most resilient(if system failure happens the app) enterprise applications. 

-->-->The 12 Factor App is a set of principles that describes a way of making software that, when followed, enables companies to create code that can be released reliably, scaled quickly, and maintained in a consistent (version releases) and predictable manner.

-->It establishes the general principles and guidelines for creating robust enterprise applications.

-->These are the conceptual solutions for the problems
12 factors are :

Codebase (One codebase tracked in revision control, many deploys)
Dependencies (Explicitly declare and isolate the dependencies)
Config (Store configurations in an environment)
Backing Services (treat backing resources as attached resources)
Build, release, and Run (Strictly separate build and run stages)
Processes (execute the app as one or more stateless processes)
Port Binding (Export services via port binding)
Concurrency (Scale out via the process model)
Disposability (maximize the robustness with fast startup and graceful shutdown)
Dev/prod parity (Keep development, staging, and production as similar as possible)
Logs (Treat logs as event streams)
Admin processes (Run admin/management tasks as one-off processes)


1)codebase: there should be exactly one codebase for a sevice for many deployments and it will be accessible to the devloping ,testing,an system administration staff.

-->means like github.

-->The Codebase principle states that all assets related to an application, everything from source code, the provisioning script, and configuration settings, are stored in a source code repository that is accessible to development, testing, and system administration staff.

2)Dependencies:
-->like nodejs has deendencies and golang has another...
-->Explicitly declare and isolate the dependencies.
-->Bscially seperating the dependencies
-->Advantage: 1)segregation 
              2)Loosly Coupling
-->Like packet.json named ki karke ...
-->
One benefit of explicit dependency declaration is that it simplifies setup for developers new to the app. The new developer can check out the app’s codebase onto their development machine, requiring only the language runtime and dependency manager installed as prerequisites. They will be able to set up everything needed to run the app’s code with a deterministic build command. 

Applications should explicitly declare their dependencies and use a dependency management tool to manage them. This ensures that the application's dependencies are isolated and can be easily installed on any environment.

3)Config:
Store the config in the environment
-->Maintain in environment variabkes and default values'
-->DB ,Myql_users URL;
-->Store configuration in the environment. Configuration such as credentials, database URLs, and API keys should be stored in environment variables. This allows for configuration to be easily changed without modifying the code.

-->For Exampe:In config gile store the database url and if something changes happens then only change in the config file ot in the code .

4)Backing Services:

 a backing service is like a specialized tool or resource that the application relies on to perform certain tasks, such as storing data, sending emails, or processing messages.
 for example baking the cake ,so oven here is the backing service .

 For example, a MySQL database is a resource; two MySQL databases (used for sharding at the application layer) qualify as two distinct resources. The twelve-factor app treats these databases as attached resources, which indicates their loose coupling to the deploy they are attached to.

 -->like when we wantd to add new database then without doing the changes in the code we can do that 

 5)Build, release, run: 

 codebase transformed to deploy by 3 stages:
 a)build stage
 b)release stage 
 c)run stage

 


