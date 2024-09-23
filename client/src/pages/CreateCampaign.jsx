import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { money } from '../assets';
import Loader from '../Components/Loader';
import FormField from '../Components/FormField';
import CustomButton from '../Components/CustomButton';
import './Createcampaign.css'


const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
      name: '',
      title: '',
      description: '',
      target: '',
      deadline: '',
      image: ''
    });
  
    const handleFormFieldChange = (fieldName, e) => {
      setForm({ ...form, [fieldName]: e.target.value });
      console.log(form);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add form submission logic here, e.g., validate input or send it to an API
      console.log("Form submitted:", form);
      // Optionally navigate to another page or reset the form
    };
  
    return (
      <div className="create-campaign-container">
        {isLoading && <Loader />}
        <div className="header">
          <h1 className="header-title">Start a Campaign</h1>
        </div>
  
        <form onSubmit={handleSubmit} className="form">
          <div className="form-fields">
            <FormField 
              labelName="Your Name *"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange('name', e)}
            />
            <FormField 
              labelName="Campaign Title *"
              placeholder="Write a title"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange('title', e)}
            />
          </div>
  
          <FormField 
            labelName="Story *"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />
  
          <div className="money-info">
            <img src={money} alt="money" className="money-icon" />
            <h4 className="money-text">You will get 100% of the raised amount</h4>
          </div>
  
          <div className="form-fields">
            <FormField 
              labelName="Goal *"
              placeholder="ETH 0.50"
              inputType="text"
              value={form.target}
              handleChange={(e) => handleFormFieldChange('target', e)}
            />
            <FormField 
              labelName="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadline}
              handleChange={(e) => handleFormFieldChange('deadline', e)}
            />
          </div>
  
          <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
  
          <div className="submit-button">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-submit"
            />
          </div>
        </form>
      </div>
    );
  };

export default CreateCampaign;
