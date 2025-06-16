package org.egov.user.security.oauth2.custom;

import lombok.extern.slf4j.Slf4j;
import org.egov.user.domain.model.SecureUser;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.exceptions.InvalidGrantException;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancerChain;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

@Slf4j
@Service
public class CustomTokenEnhancer extends TokenEnhancerChain {

    @Override
    public OAuth2AccessToken enhance(final OAuth2AccessToken accessToken, final OAuth2Authentication authentication) {
        final DefaultOAuth2AccessToken token = (DefaultOAuth2AccessToken) accessToken;
        // Changes done for auth_to_access issue in redis
        SecureUser su = null;
        //SecureUser su = (SecureUser) authentication.getUserAuthentication().getPrincipal();
        try {
            su = (SecureUser) authentication.getUserAuthentication().getPrincipal();
        } catch (Exception e) {
            log.error("Unable to cast principal to SecureUser", e);
            throw new InvalidGrantException("Login failed. Invalid user object.");
        }
        if (su == null || su.getUser() == null) {
            log.error("TokenEnhancer failed: SecureUser or su.getUser() is null. Preventing token issuance.");
            throw new InvalidGrantException("Login failed. User session could not be initialized.");
        }

        final Map<String, Object> info = new LinkedHashMap<String, Object>();
        final Map<String, Object> responseInfo = new LinkedHashMap<String, Object>();

        responseInfo.put("api_id", "");
        responseInfo.put("ver", "");
        responseInfo.put("ts", "");
        responseInfo.put("res_msg_id", "");
        responseInfo.put("msg_id", "");
        responseInfo.put("status", "Access Token generated successfully");
        info.put("ResponseInfo", responseInfo);
        info.put("UserRequest", su.getUser());

        token.setAdditionalInformation(info);

        return super.enhance(token, authentication);
    }


}