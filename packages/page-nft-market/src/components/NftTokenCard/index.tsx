// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { OfferType } from '@polkadot/react-hooks/useCollections';

import BN from 'bn.js';
import React, { useCallback } from 'react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';

import envConfig from '@polkadot/apps-config/envConfig';
import formatPrice from '@polkadot/react-components/util/formatPrice';
import { useDecoder, useSchema } from '@polkadot/react-hooks';
import { formatKsmBalance } from '@polkadot/react-hooks/useKusamaApi';

//===================================================//
import Tilt from 'react-parallax-tilt';
//===============================================//




const { commission } = envConfig;

interface Props {
  account: string | undefined;
  collectionId: string;
  openDetailedInformationModal: (collectionId: string, tokenId: string) => void;
  token: OfferType;
}

const NftTokenCard = ({ account, collectionId, openDetailedInformationModal, token }: Props): React.ReactElement<Props> => {
  const { attributes, collectionInfo, tokenName, tokenUrl } = useSchema(account, collectionId, token.tokenId);
  const { collectionName16Decoder, hex2a } = useDecoder();

  const getFee = useCallback((price: BN): BN => {
    return new BN(price).mul(new BN(commission)).div(new BN(100));
  }, []);

  const getMarketPrice = useCallback((price: BN) => {
    return formatPrice(formatKsmBalance(new BN(price).add(getFee(price))));
  }, [getFee]);

  const onCardClick = useCallback(() => {
    openDetailedInformationModal(collectionId, token.tokenId);
  }, [collectionId, openDetailedInformationModal, token]);

  return (
    <Tilt
      className="parallax-effect"
      perspective={500}
      glareEnable={true} glareMaxOpacity={0.6} glareColor="#5A7D7C" glarePosition="all" glareBorderRadius="1px"
    >
      <div className="inner-element">
        <Card
          raised
          className='token-card'
          key={token.tokenId}
          onClick={onCardClick}
        >
          {token && (
            <Image
              src={tokenUrl}
              ui={false}
              size='medium'
              centered
            />
          )}
          {!!(token && collectionInfo) && (
            <Card.Content>
              <Card.Description>
                <div className='card-name'>
                  <div className='card-name__title'>{attributes}</div>
                  <div className='card-name__field'>{hex2a(collectionInfo.TokenPrefix)} {`#${token.tokenId}`} {tokenName?.value}</div>
                  <div className='card-name__field'>{collectionName16Decoder(collectionInfo.Name)}</div>
                </div>
                {token.price && (
                  <div className='card-price'>
                    <div className='card-price__title'> {getMarketPrice(token.price)} KSM</div>
                  </div>
                )}
              </Card.Description>
              <Card.Meta>
                <span className='link'>View
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#AAE6B9" />
                  </svg>
                </span>
              </Card.Meta>
            </Card.Content>
          )}
        </Card>

      </div >
    </Tilt >

  );
};

export default React.memo(NftTokenCard);
