package africa.semic.securityDenoProject2.services;

import africa.semic.securityDenoProject2.models.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class DemoUserService implements UserService, UserDetailsService {


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).(
                () -> new UsrnmeNotFoundException("user not found"));
        return new africa.semic.securityDenoProject2.models.User();
    }
}
