package com.allithub.product.main.service;

import java.util.List;

import com.allithub.product.main.exception.CustomerServiceException;
import com.allithub.product.main.model.CustomerDetails;
import com.allithub.product.main.model.CustomerEnquiry;
import com.allithub.product.main.model.Documents;

public interface ReService {
	
	public void saveEnquiry(CustomerEnquiry ce);
	
	public List<CustomerEnquiry> getAllEnquiry();

	public void saveCustomerDetails(CustomerDetails cd);
	
	public void saveCustomerDocument(Documents d);
	
	public CustomerEnquiry getSingleEnquiry(int id) throws CustomerServiceException;
	

}
