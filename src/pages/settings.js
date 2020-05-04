import React from 'react';
import { getProfile } from '../utils/auth';
import Layout from '../components/layout';
import withAuthentication from '../utils/authentication';

const Settings = () => {
  const user = getProfile();
  return (
    <Layout>
      <div>
        <p>Settings</p>
        <p>
          Hi,
          {user.name ? user.name : 'friend'}
          !
        </p>
      </div>
    </Layout>
  );
};

export default withAuthentication(Settings);
