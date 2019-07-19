# apiness
# apiness



## Steps


cd apiness-backend

curl https://start.spring.io/starter.tgz -d dependencies=web,data-jpa,data=rest,h2 -d language=kotlin -d type=gradle-project -d baseDir=apiness | tar -xvzf -


cd apiness-frontend/apiness-vue

yarn global add @vue/cli

~~~
==> npx jhipster 
INFO! Using JHipster version installed globally
INFO! Running default command
INFO! Executing jhipster:app
INFO! Options: from-cli: true


                            https://www.jhipster.tech

Welcome to JHipster v6.1.2
Application files will be generated in folder: /Users/anonymous/repos/ad/githubrepos/apiness/apiness-backend/apiness-jhipster
 _______________________________________________________________________________________________________________

  Documentation for creating an application is at https://www.jhipster.tech/creating-an-app/
  If you find JHipster useful, consider sponsoring the project at https://opencollective.com/generator-jhipster
 _______________________________________________________________________________________________________________

? Which *type* of application would you like to create? Monolithic application (recommended for simple projects)
? What is the base name of your application? apiness
? What is your default Java package name? com.apiness.apiness
? Do you want to use the JHipster Registry to configure, monitor and scale your application? No
? Which *type* of authentication would you like to use? JWT authentication (stateless, with a token)
? Which *type* of database would you like to use? SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)
? Which *production* database would you like to use? MySQL
? Which *development* database would you like to use? MySQL
? Do you want to use the Spring cache abstraction? No - Warning, when using an SQL database, this will disable the Hibernate 2nd level cache!
? Would you like to use Maven or Gradle for building the backend? Maven
? Which other technologies would you like to use? API first development using OpenAPI-generator
? Which *Framework* would you like to use for the client? Angular
? Would you like to use a Bootswatch theme (https://bootswatch.com/)? Default JHipster
? Would you like to enable internationalization support? Yes
? Please choose the native language of the application English
? Please choose additional languages to install French
? Besides JUnit and Jest, which testing frameworks would you like to use? Gatling
? Would you like to install other generators from the JHipster Marketplace? No

Installing languages: en, fr
~~~


## Import JDL as follows
~~~
==> jhipster import-jdl ./apiness_01.jh 
~~~