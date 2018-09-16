import React from 'react';

function withLoader(WrappedComponent) {
  return function WithLoaderComponent({isLoading, ...props}) {
    return isLoading ? (
      <p style={{textAlign: 'center', fontWeight: 'bold', padding: '20px'}}>
        Please wait...
      </p>
    ) : (
      <WrappedComponent {...props} />
    );
  };
}

export default withLoader;
