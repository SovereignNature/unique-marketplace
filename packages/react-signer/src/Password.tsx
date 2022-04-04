// Copyright 2017-2022 @polkadot/react-signer authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringPair } from '@polkadot/keyring/types';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Modal, Password } from '@polkadot/react-components';
import { keyring } from '@polkadot/ui-keyring';

import { UNLOCK_MINS } from './util';

interface Props {
  address: string;
  className?: string;
  error?: string;
  onChange: (password: string, isUnlockCached: boolean) => void;
  onEnter?: () => void;
  password: string;
  tabIndex?: number;
}

function getPair (address: string): KeyringPair | null {
  try {
    return keyring.getPair(address);
  } catch (error) {
    return null;
  }
}

function Unlock ({ address, className, error, onChange, onEnter, tabIndex }: Props): React.ReactElement<Props> | null {
  const [password, setPassword] = useState('');
  const [isUnlockCached, setIsUnlockCached] = useState(false);

  const pair = useMemo(
    () => getPair(address),
    [address]
  );

  useEffect((): void => {
    onChange(password, isUnlockCached);
  }, [onChange, isUnlockCached, password]);

  const handleToggleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUnlockCached(e.target.checked);
  }, []);

  if (!pair || !pair.isLocked || pair.meta.isInjected) {
    return null;
  }

  return (
    <Modal.Columns className={className}>
      <Modal.Column>
        <Password
          autoFocus
          className='isSmall'
          isError={!!error}
          label={'unlock account with password'}
          onChange={setPassword}
          onEnter={onEnter}
          tabIndex={tabIndex}
          value={password}
        >
          <div className='switch-container'>
            <label className='switch'>
              <input
                checked={isUnlockCached}
                onChange={handleToggleChange}
                type='checkbox'
              />
              <span className={`slider round ${isUnlockCached ? '' : 'disable-token'}`} />
            </label>
            <div className='title'>{'unlock for {{expiry}} min'.replace('{{expiry}}', UNLOCK_MINS.toString())}</div>
          </div>
        </Password>
      </Modal.Column>
      <Modal.Column>
        <p>Unlock the sending account to allow signing of this transaction.</p>
      </Modal.Column>
    </Modal.Columns>
  );
}

export default React.memo(styled(Unlock)`
  .errorLabel {
    margin-right: 1rem;
    color: #9f3a38 !important;
  }

  .ui--Toggle {
    bottom: 12px;
  }

  .switch-container {
    display: flex;
    padding: 10px;
    align-items: center;
    position: absolute;
    right: 48px;

    .title {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: var(--text-color);
    }

    input[type="checkbox"] {
      margin-bottom: 11px;
      position: relative;
      cursor: pointer;
      width: 0;
    }

    input[type="checkbox"]:before {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border: 1px solid var(--card-border-color);
      background-color: white;
      border-radius: 5px;
    }

    input[type="checkbox"]:checked:before {
      border-radius: 4px;
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: var(--link-color);
    }

    input[type="checkbox"]:checked:after {
      content: "";
      display: block;
      width: 8px;
      height: 13px;
      border: 1px solid var(--input-background-color);
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      left: 6px;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 33px;
      height: 18px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: transparent;
      border: 1px solid #203D3D;
      -webkit-transition: 0.4s;
      transition: 0.4s;

      &:hover {
        border: 1px solid #203D3D;
      }
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      top: 0px;
      left: 0px;
      width: 16px;

    background-color: transparent;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #5A7D7C;
      border: 1px solid #5A7D7C;
    }
  
    input:checked + .slider:before {
      left: -1px;
      -webkit-transform: translateX(17px);
      -ms-transform: translateX(17px);
      transform: translateX(17px);
    }

    .slider.round {
      border-radius: 16px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
`);
