package org.egov.user.security.oauth2.custom;

import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.core.AuthenticationException;

public class CustomTokenService extends DefaultTokenServices {

    @Override
    public OAuth2AccessToken createAccessToken(OAuth2Authentication authentication) throws AuthenticationException {
        OAuth2AccessToken existingAccessToken = this.getAccessToken(authentication);
        if (existingAccessToken != null) {
            // This revokes old access and refresh tokens and removes their Redis keys
            this.revokeToken(existingAccessToken.getValue());
        }
        return super.createAccessToken(authentication);
    }
}