import React, { useState } from 'react';
import axios from 'axios';
import './LoanForm.css';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    loanId: '',
    dependents: '',
    education: '',
    selfEmployed: '',
    incomeAnnum: '',
    loanAmount: '',
    loanTerm: '',
    cibilScore: '',
    residentialAssetValue: '',
    commercialAssetValue: '',
    bankAssetValue: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/loan', formData);
      console.log('Response from server:', response.data);
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error('Error sending loan data:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit} className="loan-form">
        <label>
          Loan ID:
          <input type="text" name="loanId" value={formData.loanId} onChange={handleChange} required />
        </label>
        <label>
          No. of Dependents:
          <input type="number" name="dependents" value={formData.dependents} onChange={handleChange} required />
        </label>
        <label>
          Education:
          <input type="text" name="education" value={formData.education} onChange={handleChange} required />
        </label>
        <label>
          Self-Employed:
          <select name="selfEmployed" value={formData.selfEmployed} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Income (per annum):
          <input type="number" name="incomeAnnum" value={formData.incomeAnnum} onChange={handleChange} required />
        </label>
        <label>
          Loan Amount:
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />
        </label>
        <label>
          Loan Term (in months):
          <input type="number" name="loanTerm" value={formData.loanTerm} onChange={handleChange} required />
        </label>
        <label>
          CIBIL Score:
          <input type="number" name="cibilScore" value={formData.cibilScore} onChange={handleChange} required />
        </label>
        <label>
          Residential Asset Value:
          <input type="number" name="residentialAssetValue" value={formData.residentialAssetValue} onChange={handleChange} required />
        </label>
        <label>
          Commercial Asset Value:
          <input type="number" name="commercialAssetValue" value={formData.commercialAssetValue} onChange={handleChange} required />
        </label>
        <label>
          Bank Asset Value:
          <input type="number" name="bankAssetValue" value={formData.bankAssetValue} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoanForm;
