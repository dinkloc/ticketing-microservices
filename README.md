
## !!! Thông báo về link demo: Sau thời gian dùng thử DigitalOcean bắt đầu tính phí triển khai cluster k8s nên link demo không còn hoạt động. Mọi người có thể xem demo bằng hình ảnh ở bên dưới
=======
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

Users who register for an account can buy or sell tickets on the website. They can view detailed ticket information, make payments for tickets, and display a list of purchased tickets


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


- Giao diện trang chủ khi chưa có vé nào được bán
  ![Alt text](/public/image.png)
- Giao diện người dùng đăng kí tài khoản và đăng bán vé
  ![Alt text](/public/image-1.png)
- Giao diện khi có vé được đăng bán trên website
  ![Alt text](/public/image-2.png)
- Xem chi tiết thông tin vé
  ![Alt text](/public/image-3.png)
- Xác nhận thanh toán: Sau 60 giây nếu không nhập thẻ thanh toán, vé sẽ bị huỷ và trở lại giao diện trang chủ. Trong lúc chờ thanh toán, vé sẽ không được hiển thị ở trang chủ
  ![Alt text](/public/image-4.png)
- Sau 60s nhưng không xác nhận thanh toán vé
  ![Alt text](/public/image-5.png)
- Thông tin chi tiết vé trang thái vé sẽ được hiển thị my orders
  ![Alt text](/public/image-6.png)
=======
## Demo

> http://www.ticketswap.one/

