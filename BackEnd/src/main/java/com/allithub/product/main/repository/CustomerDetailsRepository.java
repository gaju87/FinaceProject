package com.allithub.product.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.allithub.product.main.model.CustomerDetails;
@Repository
public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Integer>{
	
	
	


}
