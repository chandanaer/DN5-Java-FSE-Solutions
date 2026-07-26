package com.cognizant.spring_learn.controller;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    private static final String SECRET =
            "mySecretKeyForJWTAuthenticationMustBeAtLeast32BytesLong";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("START");

        // Remove "Basic " from Authorization header
        String encodedCredentials = authHeader.substring(6);

        // Decode Base64 username:password
        byte[] decodedBytes =
                Base64.getDecoder().decode(encodedCredentials);

        String decodedCredentials =
                new String(decodedBytes, StandardCharsets.UTF_8);

        String[] credentials = decodedCredentials.split(":", 2);

        String username = credentials[0];

        LOGGER.info("Username: {}", username);

        // Create signing key
        Key key = Keys.hmacShaKeyFor(
                SECRET.getBytes(StandardCharsets.UTF_8));

        // Generate JWT token
        String token = Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(
                        System.currentTimeMillis() + 20 * 60 * 1000))
                .signWith(key)
                .compact();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("END");

        return response;
    }
}