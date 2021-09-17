package com.allithub.product.main.service;

import java.util.List;

import com.allithub.product.main.dto.OrderResponse;
import com.allithub.product.main.model.Cibil;

public interface OeService {
	
	public void saveCibil(Cibil c, int id);
	
	public List<OrderResponse> getCibilJoin();
	
	

}
