package africa.semic.securityDenoProject2.security;

import africa.semic.securityDenoProject2.security.filters.DemoAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        return http.addFilterAt(new DemoAuthenticationFilter(authenticationManager),
                BasicAuthenticationFilter.class).authorizeHttpRequests(c -> c.requestMatchers())
    }
}
