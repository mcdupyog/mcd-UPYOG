package org.egov.user.security.oauth2.custom;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.core.AuthenticationException;

@Slf4j
public class CustomTokenService extends DefaultTokenServices {

    @Override
    public OAuth2AccessToken createAccessToken(OAuth2Authentication authentication) throws AuthenticationException {
        log.info("In MyTokenServices before getAccessToken");
        OAuth2AccessToken existingAccessToken = this.getAccessToken(authentication);
        if (existingAccessToken != null) {
            // This revokes old access and refresh tokens and removes their Redis keys
            log.info("MyTokenServices.createAccessToken invoked. Revoking any existing tokens.");
            this.revokeToken(existingAccessToken.getValue());
        }
        log.info("MyTokenServices before return");
        return super.createAccessToken(authentication);
    }
}