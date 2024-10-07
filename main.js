const getToken = (ctx, requestId) => {
    const oAuth2Models = ctx.util.models.oAuth2Token;
    return oAuth2Models.getByRequestId(requestId);
}

const runTag = async (ctx, requestId, tokenType)  => {
    if (!requestId || requestId === "n/a") {
        return !ctx.renderPurpose ? "(no request specified)" : null;
    }
    const token = await getToken(ctx, requestId);
    if (!token) {
        return !ctx.renderPurpose ? "(no OAuth2 token found for that request)" : null;
    }
    const subtoken = token?.[tokenType];
    return subtoken ?? (!ctx.renderPurpose ? `(OAuth2 token does not contain a token of the specified type)` : null);
}

const tokenTag = {
    name: "oauth2_token",
    displayName: "oauth2_token",
    description: "Latest OAuth2 token",
    args: [
        {
            displayName: "Request",
            help: "Select the request that the OAuth2 token has been generated for.",
            type: "model",
            model: "Request",
            defaultValue: null
        },
        {
            displayName: "Type",
            type: "enum",
            options: [{
                displayName: "Access Token",
                value: "accessToken",
            }, {
                displayName: "Identity Token",
                value: "identityToken",
            }, {
                displayName: "Refresh Token",
                value: "refreshToken",
            }],
            defaultValue: "accessToken",
        }
    ],
    run: runTag
};

module.exports = {
    templateTags: [tokenTag]
};
