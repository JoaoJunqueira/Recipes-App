import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecepiesAppContext from './RecepiesAppContext';

function Provider({ children }) {
  const [estado, setEstado] = useState({ email: '', password: '', isDisabled: true });
  const context = {
    estado,
    setEstado,
  };

  return (
    <RecepiesAppContext.Provider value={ context }>
      {children}
    </RecepiesAppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: {},
};

export default Provider;
