# Ticket Swap

## Table of Contents

- [Description](#description)
- [Feature](#feature)
- [Services](#Services)
- [Architecture](#architecture)
- [Demo](#demo)

## Description

TicketSwap is the safest place to buy and sell tickets. A simple and fair-priced marketplace for fans to buy and sell tickets for events, concerts, ...

#### Technologies

- Next.js, Bootstrap, Styled Components
- Nodejs(express)
- MongoDB, Redis
- NATS STreaming
- Docker, Github actions, Kubernetes
- Digital Ocean

## Feature

Users who register for an account can buy or sell tickets on the website. They can view detailed ticket information, make payments for tickets, and display a list of purchased tickets.

## Services

- Auth
  - Service for authentication.
  - Express, Node, Mongodb
- Client
  - Server side rendered client application
  - Next, React
- Tickets
  - List, show, create, edit a ticket
- Orders
  - List, show, create, edit an Order
- Payments
  - Creates a payment for the order and changes order status. Payment with stripe included. Can be enhanced for more, i.e. paypal etc
- Expiration Service

## Architecture

![image](https://github.com/dinkloc/ticketing-microservices/assets/124766126/acedbf7f-9eef-41d8-958c-3d96b6a156da)

## Demo

> http://www.ticketswap.one/
