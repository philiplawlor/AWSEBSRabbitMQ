# RabbitMQ AWS Elastic Beanstalk

---

This configuration will automatically install a [RabbitMQ](https://www.rabbitmq.com/) instance on your Amazon Elastic Beanstalk instance.

## Installation

Just drop the `rabbitmq.config` file in your `.ebextensions` folder in your project root and deploy your application. The install script is copied to `/var/app/install_rabbitmq.sh` and automatically executed after your deploy.

## Usage

To make everything work, make sure you opened the following incoming and outgoing ports:

* 5672 (RabbitMQ)
* 15672 (Management Plugin, optional)

## Passwords

This script automatically deletes the `guest` user and adds a user called `5ebe2294ecd0e0f08eab7690d2a6ee69` using the password `eac8d74fae134a9bbedb21ff824605eab6d858ef`. Feel free to change this in `rabbitmq.config`.

## Features

This script also installs a crontab that tries to start RabbitMQ every 60s. This is added to recover the service for the case it crashes.

## See also

* [rabbitmqctl(1) manual page](https://www.rabbitmq.com/man/rabbitmqctl.1.man.html)
* [Management Plugin](https://www.rabbitmq.com/management.html)
* [Installing on RPM-based Linux (CentOS, Fedora, OpenSuse, RedHat)](https://www.rabbitmq.com/install-rpm.html)
* [Amazon EC2](https://www.rabbitmq.com/ec2.html)