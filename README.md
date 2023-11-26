# Overview

Frontend [![My Skills](https://skills.thijs.gg/icons?i=nextjs)](https://skills.thijs.gg)


Backend [![My Skills](https://skills.thijs.gg/icons?i=nodejs)](https://skills.thijs.gg)


Database [![My Skills](https://skills.thijs.gg/icons?i=mongodb)](https://skills.thijs.gg)  [![My Skills](https://skills.thijs.gg/icons?i=redis)](https://skills.thijs.gg)


Deployments [![My Skills](https://skills.thijs.gg/icons?i=docker)](https://skills.thijs.gg) [![My Skills](https://skills.thijs.gg/icons?i=kubernetes)](https://skills.thijs.gg)


Architecture

![image](https://github.com/dinkloc/ticketing-microservices/assets/124766126/acedbf7f-9eef-41d8-958c-3d96b6a156da)



Overview
Ticket-selling app based on Microservices architecture built with Node, React, Docker and Kubernetes. This project focuses on the production ready back-end, a simple React front-end is made just for demonstration and testing purposes.

What Technology I Used
I built a full stack application, I used a variety of technologies. On the frontend, I used React and Next JS to present content to users. Each service is created using NodeJS and Express. Data for each service is held in either a MongoDB database or Redis and NATS Streaming Server to communicate via events. The entire app is deployed and runs in Docker containers executed in a Kubernetes cluster. For routing the ingress-nginx controller is used. The app also uses Sendgrid as an email API provider. Finally, almost all of the code in this app is written with Typescript.

All services include a shared library as a dependency, called @tick-it/common, where all crucial type definitions live. This shared library is also included in this repository as a submodule.

List of microservices:

client - Service responsible for the front-end.
auth - Service responsible for authentication.
tickets - Service responsible tickets.
orders - Service responsible for orders.
payments - Service managing payments.
expiration - Service handling an order expiration time.
nats streaming - Service events. Communicate between services

Demo: http://www.ticketswap.one/
