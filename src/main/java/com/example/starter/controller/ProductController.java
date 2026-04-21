package com.example.starter.controller;

import com.example.starter.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final List<Product> products = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    public ProductController() {
        // Initial data based on the original JS code
        products.add(new Product(counter.incrementAndGet(), "Heirloom Tomatoes", "Vegetables", 28.0, 4.9, "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400", 101L, "kg", 40, "Juicy, vine-ripened heirloom tomatoes harvested at peak sweetness.", "Harvested Today", "3-4 days"));
        products.add(new Product(counter.incrementAndGet(), "Organic Russet Potatoes", "Vegetables", 32.0, 4.7, "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400", 102L, "kg", 8, "Nutrient-dense rustic potatoes, grown in rich mountain soil.", "Harvested 2 Days Ago", "2 weeks"));
        products.add(new Product(counter.incrementAndGet(), "Free Range Brown Eggs", "Animal", 90.0, 5.0, "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=400", 103L, "doz", 25, "Large, pasture-raised eggs with deep amber yolks.", "Packed Today", "3 weeks"));
        products.add(new Product(counter.incrementAndGet(), "Grass-Fed Ribeye", "Meat", 249.0, 4.8, "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80&w=400", 103L, "kg", 5, "Premium 100% grass-fed ribeye steak, perfectly marbled.", "Processed Yesterday", "4 days"));
        products.add(new Product(counter.incrementAndGet(), "Bell Peppers Mix", "Vegetables", 28.0, 4.6, "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=400", 101L, "kg", 3, "A colorful mix of crisp red, yellow, and green bell peppers.", "Harvested Yesterday", "1 week"));
        products.add(new Product(counter.incrementAndGet(), "Honey Crisp Apples", "Fruits", 168.0, 4.9, "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=400", 102L, "bag", 18, "Extra crisp and sweet apples straight from the orchard.", "Harvested This Week", "2 weeks"));
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return products;
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        product.setId(counter.incrementAndGet());
        if (product.getRating() == 0) {
            product.setRating(5.0); // Default rating
        }
        products.add(product);
        return product;
    }
}
