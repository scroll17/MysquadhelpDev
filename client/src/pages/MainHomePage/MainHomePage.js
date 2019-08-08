import React, { Component } from 'react';

import UserNavigation from '../../components/UserNavigation/Desktop/UserNavigation'
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation'

import BannerHome from '../../components/MainHome/BannerHome/BannerHome'
import HowItWorksHome from '../../components/MainHome/HowItWorksHome/HowItWorksHome'
import MarketplaceDomainsHome from '../../components/MainHome/MarketplaceDomainsHome/MarketplaceDomainsHome'

class MainHomePage extends Component{
    render() {
        return (
            <>
                <UserNavigation />
                <HeaderNavigation />

                <div>
                    <BannerHome />
                    <HowItWorksHome />
                    <MarketplaceDomainsHome />
                </div>
            </>
        )
    }
}

export default MainHomePage;
