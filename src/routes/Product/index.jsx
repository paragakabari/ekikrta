import React, { useState } from 'react';
import './product.scss';

function Product() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className='ProductTitle'>

        <h1>Products</h1>
      </div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Anti - Osteoporosis
        </div>
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Cardiovascular
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Erectic Dysfunction
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Anti-Viral / Retrovirus
        </div>
        <div
          className={`tab ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          Anti- Diabetic
        </div>
        <div
          className={`tab ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
          Vitamin and Dietary ,Iron Supplement
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 &&
          <div>
            <p>Etidronate Disodium</p>
            <p>Ibandronate Sodium</p>
            <p>Pamidronate Disodium</p>
            <p>Pentahydrate</p>
            <p>Risedronate Sodium</p>
            <p>Sodium Alendronate</p>
          </div>}
        {activeTab === 1 &&
          <div>
            <p>Dabigatran Etexilate Mesylate</p>
            <p>Enalapril Maleate</p>
            <p>Ezetimibe</p>
            <p>Lercanidipine HCL Hemihydrate</p>
            <p>Nebivolol HCL</p>
            <p>Rosuvastin Calcium</p>
            <p>Trimetazidine HCL</p>
            <p>Trimetazidine DiHCL</p>
            <p>Amlodipine Maleate</p>
            <p>Amlodipine Besilate</p>
            <p>Atorvastatin Calcium</p>
            <p>Clopidogrel Bisulfate</p>
          </div>}
        {activeTab === 2 &&
          <div>
            <p>Avanafil</p>
            <p>Dapoxetine HCL</p>
            <p>Sildenafil Citrate</p>
            <p>Tadalafil</p>
            <p>Vardenafil HCL Trihydrate</p>

          </div>}
        {activeTab === 3 &&
          <div>
            <p>Dolutegravir Sodium</p>
            <p>Molnupiravir</p>
            <p>Oseltamivir Phosphate</p>
            <p>Tenofovir Disoproxil fomarate</p>
            <p>Valacyclovir HCL</p>
          </div>}
        {activeTab === 4 &&
          <div>
            <p>Linagliptin</p>
            <p>Liraglutide</p>
            <p>Dapagliflozin</p>
            <p>Glimepiride</p>
            <p>Pioglitazone HCL</p>
            <p>Repaglinide</p>
            <p>Semaglutide</p>
            <p>Sitagliptin HCL</p>
            <p>Sitagliptin Phosphate</p>
          </div>}
        {activeTab === 5 &&
          <div>
            <p>Vitamin D3</p>
            <p>Vitamin C</p>
            <p>Vitamin E</p>
            <p>Pyridoxine HCL</p>
            <p>Calcium Carbonate</p>
            <p>Magnesium Bisglycinate</p>
            <p>Calcium Picolinate</p>
            <p>Magnesium Glycinate</p>
            <p>Calcium Pantothenate</p>
          </div>}
      </div>
    </div>
  );
}

export default Product;
