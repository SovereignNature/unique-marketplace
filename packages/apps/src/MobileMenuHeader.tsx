// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OpenPanelType } from '@polkadot/apps-routing/types';

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

import sniLogo from '../src/images/-SNIlogo.svg';

interface Props {
  isMobileMenu: OpenPanelType;
  setIsMobileMenu: (isOpen: OpenPanelType) => void;
  theme: { theme: string; logo?: string };
}

const MobileMenuHeader = (props: Props): React.ReactElement<Props> => {
  const { isMobileMenu, setIsMobileMenu, theme } = props;

  return (
    <div className='menu-mobile-header'>
      {isMobileMenu === 'tokens' && (
        <div
          className='menu-icon'
          onClick={setIsMobileMenu.bind(null, 'menu')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#AAE6B9" />
          </svg>

        </div>
      )}
      {isMobileMenu !== 'tokens' && (
        <div
          className='menu-icon active'
          onClick={setIsMobileMenu.bind(null, 'tokens')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#AAE6B9" />
          </svg>
        </div>
      )}
      {theme.logo && (
        <Menu.Item
          active={location.pathname === '/'}
          as={NavLink}
          className='app-logo'

          icon={
            <img
              alt={`logo SNI`}
              src={String(sniLogo)} />

          }

          to='/'
        />
      )}
    </div>
  );
};

export default memo(MobileMenuHeader);
