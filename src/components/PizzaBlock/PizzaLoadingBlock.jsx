import React from 'react'
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
      return (
    <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="105" cy="105" r="105" /> 
    <rect x="0" y="218" rx="2" ry="2" width="280" height="26" /> 
    <rect x="-2" y="273" rx="6" ry="6" width="280" height="84" /> 
    <rect x="7" y="366" rx="0" ry="0" width="0" height="29" /> 
    <rect x="1" y="364" rx="0" ry="0" width="84" height="40" /> 
    <rect x="138" y="363" rx="20" ry="20" width="135" height="45" />
  </ContentLoader>
  );

}

export default PizzaLoadingBlock
