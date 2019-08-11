import React, { Component } from 'react';

import UserNavigation from '../../components/UserNavigation/Desktop/UserNavigation'
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation'

import BannerHome from '../../components/MainHome/BannerHome/BannerHome'
import HowItWorksHome from '../../components/MainHome/HowItWorksHome/HowItWorksHome'
import MarketplaceDomainsHome from '../../components/MainHome/MarketplaceDomainsHome/MarketplaceDomainsHome'
import GrowBusinessHome from '../../components/MainHome/GrowBusinessHome/GrowBusinessHome'
import HowDoNameContestsWork from "../../components/MainHome/HowDoNameContestsWork/HowDoNameContestsWork";
import FooterHome from "../../components/MainHome/FooterHome/FooterHome";

class MainHomePage extends Component{
    render() {
        return (
            <>
                <UserNavigation />
                <HeaderNavigation />

                <div>
                    <BannerHome />
                    {/*<HowItWorksHome />*/}
                    <MarketplaceDomainsHome />
                    <GrowBusinessHome />
                    <HowDoNameContestsWork />
                </div>

                <footer>
                    <FooterHome />
                </footer>
            </>
        )
    }
}

export default MainHomePage;
