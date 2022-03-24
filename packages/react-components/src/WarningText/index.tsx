// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

import infoIcon from './infoIcon.svg';
import warningIcon from './warningIcon.svg';

interface WarningTextProps {
  className: string;
  text: string | React.ReactNode;
}

function WarningText ({ className = 'info', text }: WarningTextProps): ReactElement {
  return (
    <div className={`warning-text ${className}`}>
      <img
        alt='info-icon'
        src={(infoIcon) as string}
      />
      {text}
    </div>
  );
}

export default memo(styled(WarningText)`
  display: flex;
  background-color: rgba(170, 230, 185, 0.486);
  align-items: center;
  padding: calc(var(--gap) / 2);
  border-radius: calc(var(--gap) / 4);
  margin: calc((var(--gap) / 2) * 3) 0;

  font-family: var(--font-roboto);
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 0;

  &.warning {
    color: #AAE6B9;
    background-color: rgba(170, 230, 185, 0.486);
  }

  &.info {
    color: #AAE6B9;
    background-color: rgba(170, 230, 185, 0.486);
  }

  &.no-margin {
    margin: 0;
  }

  a {
    margin: 0 calc(var(--gap) / 2);
  }

  img {
    margin: 0 calc(var(--gap) / 2);
  }
`);
