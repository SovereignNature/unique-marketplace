// Copyright 2017-2020 @polkadot/app-parachains authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UpwardMessage } from '@polkadot/types/interfaces';

import React from 'react';
import styled from 'styled-components';

import { Card, Output } from '@polkadot/react-components';

import { useTranslation } from '../translate';

interface Props {
  className?: string;
  dispatchQueue: UpwardMessage[];
}

function DispatchQueue ({ className = '', dispatchQueue = [] }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h1>{t<string>('relay dispatch queue')}</h1>
      {dispatchQueue.length === 0
        ? t<string>('no messages')
        : dispatchQueue.map((data): React.ReactNode => (
          <Card
            className='queue-message'
            key={data.toHex()}
          >
            <Output
              help={t<string>('Message data')}
              isFull
              isMonospace
              label={t<string>('data')}
              value={data.toHex()}
              withCopy
            />
          </Card>
        ))
      }
    </div>
  );
}

export default React.memo(styled(DispatchQueue)`
  .queue-message {
    margin-bottom: 2rem;
  }
`);
