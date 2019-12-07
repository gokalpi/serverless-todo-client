// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'do68evanic'
const regiondId = 'eu-central-1'

export const apiEndpoint = `https://${apiId}.execute-api.${regiondId}.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-lsutvgwy.auth0.com',            // Auth0 domain
  clientId: 'Xy22vBDVZmZD2ikAMJji6v4iix9Eml6K',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
