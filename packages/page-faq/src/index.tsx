// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

// external imports
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';

// local imports and components
import { AppProps as Props } from '@polkadot/react-components/types';
import 'bootstrap/dist/css/bootstrap.min.css';

function Faq (): React.ReactElement<Props> {

  return (
    <main className='faq-page'>
      <Header as='h1'>FAQ</Header>
      <Accordion>
          <Accordion.Item eventKey="0">
          <Accordion.Header>I connected the right wallet to the app but it shows that my NFTree belongs to a different address. Why?</Accordion.Header>
          <Accordion.Body>
              Substrate account addresses (Polkadot, Kusama etc.) may look different on different networks but they have all the same private key underneath. You can see all transformations of any address on <a href="https://polkadot.subscan.io/tools/ss58_transform" target="_blank">https://polkadot.subscan.io/tools/ss58_transform</a>
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
              <Accordion.Header>I see my NTF on the My Gallery page twice and one of them is “on hold”</Accordion.Header>
              <Accordion.Body>
                  It can happen if the previous version of the market had information about an unfinished listing. In that case: (1) Go to the page of ‘on hold’ token and complete listing. (2) Then delist this token.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
              <Accordion.Header>I see the error “1010: Invalid Transaction: Inability to pay some fees, e.g. account balance too low”</Accordion.Header>
              <Accordion.Body>
                  Just wait for half a minute and try again.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
              <Accordion.Header>Whom can I contact if I have questions regarding the marketplace?</Accordion.Header>
              <Accordion.Body>
                  Please contact <a className="link" href="mailto:info@sadu.io">info@sadu.io</a> if you have any questions.
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default React.memo(Faq);
