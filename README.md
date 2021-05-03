# Sovos Challenge #

### Challenge 1 - UI ###

Based on the search functionality of the Amazon website describe test scenarios using equivalence class partitioning (ECP) to assure that everything is working as it is expected for an e-commerce web page. After that, choose an automation framework and implement the described test scenarios, you can use any language or framework (**only open-source frameworks**).

* https://www.amazon.com

### Challenge 2 - API ###

Get Notifications: 
* https://api.mocki.io/v1/4862d8e7

You need to test a GET notifications API that retrieves notifications and check that the following requirements are satisfied:

- should return notifications for the following countries: BR, AR
- perPage value should correspond to the number of notifications retrieved
- content of notifications should be a xml encoded on Base64
- notificationId should be a valid GUID
- notificationId should correspond to ID inside content xml document
- 200 notifications should have "Document Authorized" on StatusReason and "Document authorized successfully" on Text fields inside content xml document
- 400 notifications should have "Document Rejected" on StatusReason and "Document was rejected by tax authority" on Text fields inside content xml document
- Automation should display a warn in case of any rejected notification

Describe test scenarios for the given requirements using ECP, after that, choose an automation framework and implement the described test scenarios, you can use any language or framework (**only open-source frameworks**). 




## Make a fork of this repository and submit a pull request with your solutions! Good luck! ##


**The use of automation design patters will be a differential.**

**Please, include in the README all the information needed to run the project!**

**Don't forget to add all scenarios that you described using ECP in a specific session of your README, this has a lot of weight in the evaluation!!**


# Sovos Challenge Excution Teste#
- npm run delete_reports (Exclude Reports)
- npm run clean-screenshots (Exclude Screenshots)
- npm run test-headless (Headless Execution)
- npm run junta-gera-rel (Generate Unique Report) \sovos-qa-challenge\cypress\reports\Relatório.html

