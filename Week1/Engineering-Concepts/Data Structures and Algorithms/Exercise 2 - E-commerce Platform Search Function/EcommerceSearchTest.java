package com.cognizant.search;

public class EcommerceSearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Camera", "Electronics"),
                new Product(102, "Headphones", "Electronics"),
                new Product(103, "Laptop", "Electronics"),
                new Product(104, "Mouse", "Accessories"),
                new Product(105, "Phone", "Electronics")
        };

        System.out.println("Linear Search Result");

        Product linearResult =
                SearchAlgorithms.linearSearch(products, "Laptop");

        if (linearResult != null) {
            System.out.println(linearResult);
        }

        System.out.println();

        System.out.println("Binary Search Result");

        Product binaryResult =
                SearchAlgorithms.binarySearch(products, "Laptop");

        if (binaryResult != null) {
            System.out.println(binaryResult);
        }
    }
}
