package nodomain.stswoon.kanbanboard.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.lang.Nullable;

import java.util.UUID;

//todo check board not null
interface UserRepository extends CrudRepository<UserEntity, UUID> {
    @Nullable
    UserEntity findByEmail(String email);
}
