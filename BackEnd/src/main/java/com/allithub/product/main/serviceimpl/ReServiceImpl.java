package com.allithub.product.main.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allithub.product.main.exception.CustomerServiceException;
import com.allithub.product.main.model.CustomerDetails;
import com.allithub.product.main.model.CustomerEnquiry;
import com.allithub.product.main.model.Documents;
import com.allithub.product.main.repository.CustomerDetailsRepository;
import com.allithub.product.main.repository.CustomerEnquiryRepository;
import com.allithub.product.main.repository.DocumentsRepository;
import com.allithub.product.main.service.ReService;

@Service
public class ReServiceImpl implements ReService {

	@Autowired
	CustomerEnquiryRepository cer;
	
	@Autowired
	CustomerDetailsRepository cdr;
	
	@Autowired
	DocumentsRepository dr;
	
//--------------------------------------------------------------To-save-enquiry-application---->
	
	@Override
	public void saveEnquiry(CustomerEnquiry ce) {
		
		cer.save(ce);
		
	}
//---------------------------------------------------------------To-get-all-enquires----------->
	@Override
	public List<CustomerEnquiry> getAllEnquiry() {
		
		List<CustomerEnquiry> list = cer.findAll();
		return list;
	}
//--------------------------------------------------------------------------------------->
	@Override
	public void saveCustomerDetails(CustomerDetails cd) {
		
		cdr.save(cd);
		
	}
//------------------------------------------------------------------------------------->
	@Override
	public void saveCustomerDocument(Documents d) {
		
		dr.save(d);
//------------------------------------------------------------------------------------->		
	}
	@Override
	public CustomerEnquiry getSingleEnquiry(int id) throws CustomerServiceException{
		
		CustomerEnquiry c;
			
			
			try 
			{
				Optional<CustomerEnquiry> o = cer.findById(id);
				c = o.get();
			}
			
			catch (Exception e) 
			{
				throw new CustomerServiceException("Data not found.........!!!");
			}
			
		
		return c;
		
	}



}
