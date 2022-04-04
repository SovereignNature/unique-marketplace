// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

function Footer ({ className = '' }): ReactElement {
  return (
    <div className={`app-footer ${className || ''}`}>
      <div className='app-footer--container'>
        <div className='app-footer__info'>
          <div className='app-footer__info__powered'>Powered by <a
            href='https://sovereignnature.com/'
            rel='noreferrer nooperer'
            target='_blank'>SNI</a> | Built on
          <a href='https://unique.network/'
            rel='noreferrer nooperer'
            target='_blank'> Unique Network</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(styled(Footer)`
  padding: var(--gap);
  background: var(--card-background);
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  .app-footer--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-footer__info {
    color: var(--foter-text-color);
  }

  .app-footer__social-links {
    display: flex;
    grid-column-gap: var(--gap);

    a {
      display: flex;
      justify-content: center;
    }
  }

  a {
    color: var(--link-color);
  }

  @media (max-width: 1023px) {
    border-top: 1px solid var(--enum-input-border-disabled-color);
  }

  @media (max-width: 767px) {
    padding: var(--gap);
    padding-bottom: 76px;

    .app-footer--container {
      align-items: flex-start;
      flex-direction: column;
      grid-row-gap: var(--gap);
    }
  }
`);
