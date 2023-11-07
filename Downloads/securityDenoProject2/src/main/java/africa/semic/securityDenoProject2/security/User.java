package africa.semic.securityDenoProject2.security;

import africa.semic.securityDenoProject2.models.Authority;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

// THis is to follow the adapter design pattern
public class User implements UserDetails {

    private final africa.semic.securityDenoProject2.models.User user;
    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<Authority> userAuthorities = user.getAuthorities();
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        for (Authority authority:userAuthorities) {
            var auth = new SimpleGrantedAuthority(authority.name());
            authorities.add(auth);
        }
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }


    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
