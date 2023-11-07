package africa.semic.securityDenoProject2.security.filters;

import africa.semic.securityDenoProject2.dto.request.LoginRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

public class DemoAuthenticationFilter implements Filter {
    private final AuthenticationManager authenticationManager;
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {
        InputStream inputStream = servletRequest.getInputStream();
        ObjectMapper mapper = new ObjectMapper();
        LoginRequest loginRequest = mapper.readValue(inputStream, LoginRequest.class);
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, password);
        Authentication authenticationResult = authenticationManager.authenticate(authentication);

        if (authenticationResult != null) {
            OutputStream outputStream = servletResponse.getOutputStream();
            Map<String, String> map = new HashMap<>();
            map.put("response", "authentication successfull");
            outputStream.write(mapper.writeValueAsBytes(map));
        }
        filterChain.doFilter(request, response);
    }
}
