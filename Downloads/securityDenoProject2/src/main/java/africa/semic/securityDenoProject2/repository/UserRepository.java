package africa.semic.securityDenoProject2.repository;

import africa.semic.securityDenoProject2.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u where u.username=:username")
    Optional<User> findByUsername(String username);
}
