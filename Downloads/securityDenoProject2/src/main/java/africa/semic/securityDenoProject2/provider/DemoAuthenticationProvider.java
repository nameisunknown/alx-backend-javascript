package africa.semic.securityDenoProject2.provider;

import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DemoAuthenticationProvider implements AuthenticationProvider {
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;
    @Override
    public Authentication authenticate(Authentication authRequest) throws AuthenticationException {
        String username = authRequest.getPrincipal().toString();
        String password = authRequest.getCredentials().toString();
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (passwordEncoder.matches(password, userDetails.getPassword())){
            Authentication authResult = new UsernamePasswordAuthenticationToken(username, password);
            return authResult
        }
        thow new BadCredentialsException("inalid creadentials supplied");
    }

    @Override
    public boolean supports(Class<?> authenticationType) {
        Class<UsernamePasswordAuthenticationToken> authenticationTokenClass =
                UsernamePasswordAuthenticationToken.class;
        return authenticationType.equals(UsernamePasswordAuthenticationToken.class);
    }
}
