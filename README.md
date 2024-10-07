# insomnia-plugin-oauth2-tag

![NPM Version](https://img.shields.io/npm/v/insomnia-plugin-oauth2-tag)
![GitHub License](https://img.shields.io/github/license/elKei24/insomnia-plugin-oauth2-tag)

An [Insomnia](https://insomnia.rest/) plugin that adds a tag for accessing the OAuth2 token of one request in other requests.

## Installation

### Via the Plugin Hub Website

1. Find the plugin on the [Plugin Hub](https://insomnia.rest/plugins/insomnia-plugin-oauth2-tag).
2. Click the "Install Plugin" button.
3. Click "Open Insomnia" and "Install".

### From the Plugins Tab

1. Open Insomnia.
2. Go to Application > Preferences > Plugins.
3. Type "insomnia-plugin-oauth2-tag".
4. Click "Install Plugin".

## Usage

1. Set up [OAuth2 authentication](https://docs.insomnia.rest/insomnia/authentication#oauth-20) for a request.
2. Fetch an OAuth2 token for that request.
3. Wherever environment variables can be used, press Control+Space to open the variables and tags dropdown.
4. Find and select "oauth2_token".
5. Select the created "oauth2_token" tag to configure it.
6. Under "Request", select the request you configured for OAuth2 authentication.
7. Under "Type", select the token type that you want to use.
8. Confirm with "Done".
