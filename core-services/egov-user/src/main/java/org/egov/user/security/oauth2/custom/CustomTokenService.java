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
        OAuth2AccessToken existingAccessToken = null;
        try {
            existingAccessToken = this.getAccessToken(authentication);
        } catch (Exception e) {
            log.warn("Could not get existing access token due to exception—ignoring and creating new.", e);
        }
        if (existingAccessToken != null) {
            log.info("MyTokenServices.createAccessToken invoked. Revoking any existing tokens.");
            this.revokeToken(existingAccessToken.getValue());
        }
        log.info("MyTokenServices before return");
        return super.createAccessToken(authentication);
    }
}