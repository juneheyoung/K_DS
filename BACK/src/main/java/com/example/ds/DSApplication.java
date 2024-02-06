package com.example.ds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan
@SpringBootApplication
public class DSApplication {
	public static void main(String[] args) {
		SpringApplication.run(DSApplication.class, args);
	}



}


