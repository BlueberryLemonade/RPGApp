package org.rpgApp.RPGApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class RpgAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(RpgAppApplication.class, args);
	}

}
