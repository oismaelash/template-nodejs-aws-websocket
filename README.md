
  
<br />
  <h3 align="center">Template Websocket with Node.js and AWS</h3>

  <p align="center">
    Websocket application with Node.js, Serverless Framework and AWS Services
    <br />
   <a href="https://www.youtube.com/ismaelnascimentoash">Video how to use</a> 
    ·
    <a href="https://github.com/ismaelash/template-nodejs-websocket/issues">Report Bug</a>
    ·
    <a href="https://github.com/ismaelash/template-nodejs-websocket/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

Template aplication websocket using nodejs, serverless framework and aws api gateway and aws DynamoDB

### Built With

* [Node.js](https://nodejs.org/en/)
* [Serverless Framework](https://www.serverless.com/)
* [AWS API Gateway](https://aws.amazon.com/api-gateway/)
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [Github Workflow](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

### Getting Started

* [See the video for all instructions](https://www.youtube.com/ismaelnascimentoash)

* Create Access/Secret Keys on AWS
* * IAM service
* * * https://console.aws.amazon.com/iam/home#/home
* * * https://console.aws.amazon.com/iamv2/home#/users
* * * Create new user type programmatic access
* * * * Permissions: AdministratorAccess

* Create provider for AWS with Access/Secret Keys
* * https://app.serverless.com/ismaelnascimentoash/settings/providers
* * https://www.serverless.com/framework/docs/guides/providers/

- Create Access Key on Serverless Framework Dashboard
* * https://app.serverless.com/ismaelnascimentoash/settings/accessKeys

- Create Secret Key for Serverless Framework on Github Repository
* * SERVERLESS_ACCESS_KEY
* * https://github.com/ismaelash/template-nodejs-aws-websocket/settings/secrets/actions

* Install Serverless Framework
* * https://www.serverless.com/framework/docs/getting-started/ <br>
* * `$ npm install -g serverless`

* Changes informations on serverless.yml
* * https://github.com/ismaelash/template-nodejs-aws-websocket/blob/main/serverless.yml <br>
* * * org, app, service are important

* Connect project with dashboard of Serverless Framework
* * `$ serverless login`

* Configure project with Serverless Framework
* * `$ serverless`
* * Choose create project
* * Choose deploy project

* Verify project created
* * `$ serverless info`
* * View Serverless Framework Dashboard
* * View services created on AWS Services used

* View your endpoints and services created
* * `$ serverless info`

* Testing the Websocket
* * Yo can use the Chrome Extension below
* * * [Websocket Test Client](https://chrome.google.com/webstore/detail/websocket-test-client/fgponpodhbmadfljofbimhhlengambbn?hl=en)
* * Example of payloads for test this template application websocket
* * * [JSONs](https://github.com/ismaelash/template-nodejs-aws-websocket/tree/main/assets)

* Make changes on code and redeploy
* * `$ serverless deploy`

* Remove all project
* * `$ serverless remove`

## Troubleshooting

* If on step "Configure project with Serverless Framework" show up error below <br>
`Error: The provided access key is not authorized for this operation. - Please contact support and provide this identifier to reference this issue - 6XTBZKM5S92D`
* * Go to C:\Users\USERNAME\
* * * Delete file `.serverlessrc`
* * * Run again: `$ serverless login`
* * * Run again: `$ serverless`

* If on step "Configure project with Serverless Framework" show up error below <br>
`'/20210819/us-east-1/sts/aws4_request' not a valid key=value pair (missing equal-sign) in Authorization header: 'AWS4-HMAC-SHA256 Credential=AKIASXQVJM56373DDF /20210819/us-east-1/sts/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=cd6bde074a6941be7623f8156a6a6775613f3bd848f855d78b556bef116f03e7'.`
* * Access Key or Secret Key is wrong on Serverless Framework Dashboard in Provider used
* * * https://app.serverless.com/ismaelnascimentoash/settings/providers

* If on step "Configure project with Serverless Framework" show up error below <br>
`An error occurred: WebsocketsDeploymentStage - CloudWatch Logs role ARN must be set in account settings to enable logging (Service: AmazonApiGatewayV2; Status Code: 400; Error Code: BadRequestException; Request ID: cde1d14f-6dbc-46d3-8568-1433e7f712ff; Proxy: null).`
* * Create new role
* * * https://console.aws.amazon.com/iamv2/home#/roles
* * * Select type of trusted entity > AWS Service
* * * Choose a use case > API Gateway
* * * Click Next: Permissions
* * * Permissions: AmazonAPIGatewayPushToCloudWatchLogs
* * * Click Next: Tags and Click Next: Review
* * * Add name: serverlessAPIGatewayCloudWatchLogs and Click Create Role
* * * remove the comment the line 20 of [serverless.yml](https://github.com/ismaelash/template-nodejs-aws-websocket/blob/main/serverless.yml)
* * * replace `{AccountId}` for your [account Id](https://console.aws.amazon.com/billing/home?#/account)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact
- [Site](https://www.ismaelnascimento.com)
- [Email](mailto:contato@ismaelnascimento.com)
- [Linkedin ](https://www.linkedin.com/in/ismaelash)



<!-- ACKNOWLEDGEMENTS -->
## Knowledgements
* [Serverless Compute](https://www.slideshare.net/IsmaelNascimento5/aws-lambda-comnodejsnerdzao)
