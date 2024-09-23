import React from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function Component() {
  Intercom({
    app_id: 'osdluh2g',
  });

  return <div>Click on the app on the bottom right.</div>;
}
