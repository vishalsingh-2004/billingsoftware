package in.vishalproj.billingsoftware.service;

import java.util.List;

import in.vishalproj.billingsoftware.io.OrderRequest;
import in.vishalproj.billingsoftware.io.OrderResponse;

public interface OrderService {
    OrderResponse createOrder(OrderRequest request);

    void deleteOrder(String orderId);

    List<OrderResponse> getLatestOrders();
}
