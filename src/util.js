import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsConfig from '../aws-exports';

export const client = new AWSAppSyncClient({
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY, //awsConfig.aws_appsync_authenticationType,
    apiKey: awsConfig.aws_appsync_apiKey,
  }
});


/*
*
client.query({
    query: gql(listCategorys)
  }).then(({ data: { listCategorys } }) => {
    console.log(listCategorys.items);
    return listCategorys.items;
  })
*
*
* */
