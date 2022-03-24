// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo, ReactElement } from 'react';

import { Filters } from '@polkadot/app-nft-market/containers/NftMarket';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import FilterContainer from './FilterContainer';

interface PropTypes {
  account: string | undefined;
  allowClearFilters: boolean;
  filters: Filters;
  collections: NftCollectionInterface[];
  loadingCollections: boolean;
  openFilters: boolean;
  setAllowClearFilters: (allow: boolean) => void;
  setFilters: (filters: Filters) => void;
  setAreFiltersActive: (condition: boolean) => void;
}

const MarketFilters = ({ account, allowClearFilters, collections, filters, loadingCollections, openFilters, setAllowClearFilters, setAreFiltersActive, setFilters }: PropTypes): ReactElement => {
  return (
    <div className={`filter-main ${openFilters ? 'open' : ''}`}>
      <FilterContainer
        account={account}
        allowClearFilters={allowClearFilters}
        collections={collections}
        filters={filters}
        loadingCollections={loadingCollections}
        setAllowClearFilters={setAllowClearFilters}
        setAreFiltersActive={setAreFiltersActive}
        setFilters={setFilters}
      />
    </div>
  );
};

export default memo(MarketFilters);
