package africa.semic.securityDenoProject2.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class LoginRequest {
    private String username;
    private String password;
}
