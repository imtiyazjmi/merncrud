// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Company from '../models/company.server.model';

export const getCompanies = (req,res) => {
  Company.find().exec((err,companies) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
      return res.json({'success':true,'message':'Companies fetched successfully',companies});
  });
}

export const addCompany = (req,res) => {
  console.log(req.body);
  const newCompany = new Company(req.body);
  newCompany.save((err,company) => {
    if(err){
    return res.json({'success':false,'message':err});
    }

    return res.json({'success':true,'message':'Company added successfully',company});
  })
}

export const updateCompany = (req,res) => {
  Company.findOneAndUpdate({ _id:req.body.companyId }, req.body, { new:true }, (err,company) => {
    if(err){
      return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(company);
    return res.json({'success':true,'message':'Updated successfully',company});
  })
}

export const getCompany = (req,res) => {
  Company.find({_id:req.params.id}).exec((err,company) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(company.length){
      return res.json({'success':true,'message':'Company fetched by id successfully',company});
    }
    else{
      return res.json({'success':false,'message':'Company with the given id not found'});
    }
  })
}

export const deleteCompany = (req,res) => {
  Company.findByIdAndRemove(req.params.id, (err,company) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':company.companyName+' deleted successfully'});
  })
}
