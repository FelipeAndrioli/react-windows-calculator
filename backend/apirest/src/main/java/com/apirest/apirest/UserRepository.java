package com.apirest.apirest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select * from tb_user where email = %?1%")
    User findByUsername(String username);
}
