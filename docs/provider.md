---
title: Provider
description: how to configure Casdoor to provide SMS and Email functionality for the Casnode application
keywords: [Provider]
authors: [yehong-z]
---

## Introduction
This document will guide you on how to configure Casdoor to use SMS and Email providers to enable the respective functionality for the Casnode application. 
By properly configuring the SMS and Email providers, 
you can allow the Casnode application to send SMS and Email notifications to users.



## Prerequisites
Before getting started with the configuration, 
please ensure that the following prerequisites are met:

1. You have successfully installed and deployed Casdoor and the Casnode application.
2. You have a valid SMS provider account and possess the necessary API key or authentication credentials.
3. You have a valid Email provider account and possess the SMTP server information and account credentials.

## Step 1: Configure the SMS Provider
1. Open the Casdoor Management Interface and Log in using your administrator account.

2. Adding an SMS provider.
   ![add provider](\img\provider\addprovider.png)
   
3. Fill in the appropriate parameters based on the requirements of your SMS provider. This generally includes the API key, API URL, etc.
   ![add provider](\img\provider\config_sms.png)
4. Save the configuration changes.

## Step 2: Configure the Email Provider
1. Open the Casdoor Management Interface and log in using your administrator account.

2. Add an SMTP Email provider.

3. Fill in the appropriate parameters based on the requirements of your Email provider. This generally includes the SMTP server address, port number, account credentials, etc.
   ![smtp](\img\provider\smtp.png)
4. Save the configuration changes.

## Step 3: Add SMS and SMTP Providers to Casnode Application
1. Open the Casdoor Management Interface and Log in using your administrator account.
2. Open the Casnode Application.
   ![add provider2](\img\provider\addprovider2.png)
3. Add Providers to the Application.
   ![add provider3](\img\provider\addprovider3.png)

## Step 4: Test the Configuration
Once the SMS and SMTP providers are configured, 
you can trigger the respective SMS and Email notification features (such as reply)
through the Casnode application and verify if notifications are received as expected. 
This will help validate the correctness of the configuration.
