package com.Sergio.bicycles.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sergio.bicycles.entity.dao.IAppUserDao;
import com.Sergio.bicycles.entity.model.AppUser;

@Service
public class AppUserService implements IAppUserService {
	
	@Autowired
	IAppUserDao appUserDao;
	
	@Override
	public List<AppUser> getAll() {
		return (List<AppUser>)appUserDao.findAll();
	}

	@Override
	public AppUser getOne(long id) {
		return appUserDao.findById(id).get();
	}

}
