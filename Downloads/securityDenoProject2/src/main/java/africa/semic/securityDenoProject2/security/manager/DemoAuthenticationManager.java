package africa.semic.securityDenoProject2.security.manager;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

public class DemoAuthenticationManager implements AuthenticationManager {

    private AuthenticationProvider authenticationProvider;
    @Override
    public Authentication authenticate(Authentication authRequest) throws AuthenticationException {
        if (AuthenticationProvider.supports(authRequest.getClass()))
            return authenticationProvider.authenticate(authRequest);

        throw new AuthenticationUnsupported() {
        }
    }
}
