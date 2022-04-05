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
        <Header as='h1'>About SĀDU</Header>
        <div className="unique-card">
            <p className='about-sadu'>Sādu is a play to earn mobile app for natural capital. Eco-conscious habits can feel pointless. Investing in the carbon market is complicated. Reduce your impact and gain access to the market for carbon removal by collecting eco-friendly NFTs.</p>
            <p className='about-sadu'> Download the app, subscribe, or play your favourite sport to earn trees monthly. Every tree guarantees funding to an ecosystem restoration project. The more trees you earn the more NFTs you win.</p>
            <p className='about-sadu'>As a platform for digital assets with a positive environmental impact Sādu will release the first batch of NFTs on a marketplace that prioritizes the planet. Funding from the sale of every digital asset will be allocated to participating Sustainability Partners, a digital artist, and Sādu. Participating Sustainability Partners, include SeaTrees, The Haiti Tree Project, and Re-Climate 🇺🇦. They each take their own approach to restoring kelp forests, deforestation recovery, and regenerative agroforestry.</p>
            <p className='about-sadu'>The artists contributing work to this collection, Bond Truluv and Stacie Ant bring awareness to the emotional dichotomy between self-preservation, technological advancement and an innate longing to preserve the natural ecosystem. Additionally, the work of Stacie Ant implements generative artificial intelligence to make each piece truly unique for this genesis collection.</p>
            <p className='about-sadu'>This batch of NFTs is a pre-release for Polkadot Kusama. A total of 1000 NFTs will be released on multiple blockchain networks. This marketplace was built in partnership with Sovereign Nature Initiative (SNI) and Unique Network. SNI takes a 5% commission on every NFT which goes towards conservation partner projects.</p>
            <Header as='h2'>Frequently Asked Questions</Header>
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
        </div>
    </main>
  );
}

export default React.memo(Faq);
