package in.vishalproj.billingsoftware.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import in.vishalproj.billingsoftware.entity.OrderEntity;

public interface OrderEntityRepository extends JpaRepository<OrderEntity, Long> {
  
    List<OrderEntity> findAllByOrderByCreatedAtDesc();
    Optional<OrderEntity> findByOrderId(String orderId);
    
}
