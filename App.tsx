import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Padding, Color, FontSize, FontFamily} from './GlobalStyles';

const App = () => {
  return (
  <ScrollView>
    <View style={styles.collections5}>
      {/* <Image
        style={[styles.modeEditIcon, styles.iconscaretLayout]}
        resizeMode="cover"
        source={require('../assets/mode-edit.png')}
      /> */}
      <View style={styles.navPosition}>
        <View style={[styles.nav, styles.navPosition]}>
          <View style={[styles.atomsweblogo, styles.parentFlexBox]}>
            <View style={styles.parentFlexBox}>
              {/* <Image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require('../assets/logo1.png')}
              /> */}
              <Text style={styles.cityHomeLink}>NEW YORK</Text>
            </View>
            {/* <Image
              style={[styles.iconscaret, styles.iconscaretLayout]}
              resizeMode="cover"
              source={require('../assets/iconscaret.png')}
            /> */}
          </View>
          <Text style={[styles.signUp, styles.bestFlexBox]}>sign up</Text>
        </View>
      </View>
      <View
        style={[
          styles.theBestNewRestaurantsOf20Parent,
          styles.collectionpostsPosition,
        ]}>
        <Text style={[styles.theBestNew, styles.citiesClr]} numberOfLines={3}>
          The Best New Restaurants Of 2022
        </Text>
        <View style={[styles.citiesParent, styles.parentFlexBox]}>
          <Text style={[styles.cities, styles.citiesClr]}>11 Cities</Text>
          <Text style={[styles.dec72022, styles.citiesClr]}>Dec 7, 2022</Text>
        </View>
        <Text style={[styles.loremIpsumDolor, styles.citiesClr]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={[styles.collectionposts, styles.collectionpostsPosition]}>
        <View>
          {/* <Image
            style={styles.imgIcon}
            resizeMode="cover"
          /> */}
          <View style={[styles.atomseyebrow, styles.atomseyebrowPosition]}>
            <Text style={[styles.kicker, styles.citiesClr]}>guide</Text>
          </View>
        </View>
        <Text style={[styles.the25Best, styles.bestSpaceBlock]}>
          The 25 Best Restaurants In NYC
        </Text>
        <Text style={[styles.summary, styles.bestSpaceBlock]}>
          Meet our 25 highest-rated restaurants.
        </Text>
      </View>
      <View style={[styles.collectionposts1, styles.collectionpostsPosition]}>
        <View style={[styles.miniPost, styles.miniPosition1]}>
          <View style={styles.image1}>
            <View style={styles.atomseyebrow1}>
              <Text style={[styles.kicker, styles.citiesClr]}>guide</Text>
            </View>
          </View>
          <Text style={[styles.theBestFirst, styles.bestSpaceBlock]}>
            The Best First Date Spots In NYC
          </Text>
        </View>
        <View style={[styles.miniPost1, styles.miniPosition]}>
          <View>
            <View style={[styles.atomseyebrow2, styles.atomseyebrowPosition]}>
              <Text style={[styles.kicker, styles.citiesClr]}>guide</Text>
            </View>
          </View>
          <Text style={[styles.nycsNewRestaurant, styles.bestSpaceBlock]}>
            NYC’s New Restaurant Openings
          </Text>
        </View>
      </View>
      <View style={[styles.collectionposts2, styles.collectionpostsPosition]}>
        <View>
          <View style={[styles.atomseyebrow, styles.atomseyebrowPosition]}>
            <Text style={[styles.kicker, styles.citiesClr]}>guide</Text>
          </View>
        </View>
        <Text style={[styles.the25Best, styles.bestSpaceBlock]}>
          The 25 Best Restaurants In NYC
        </Text>
        <Text style={[styles.summary, styles.bestSpaceBlock]}>
          Meet our 25 highest-rated restaurants.
        </Text>
      </View>
      <View style={[styles.collectionposts3, styles.collectionpostsPosition]}>
        <View style={[styles.miniPost2, styles.miniPosition]}>
          <View>
            <View style={[styles.atomseyebrow2, styles.atomseyebrowPosition]}>
              <Text style={[styles.kicker, styles.citiesClr]}>guide</Text>
            </View>
          </View>
          <Text style={[styles.nycsNewRestaurant, styles.bestSpaceBlock]}>
            Seattle’s New Restaurant Openings
          </Text>
        </View>
      </View>
      <View style={styles.navwebfooter}>
        <View>
          <View style={styles.cities1}>
            <View style={[styles.stCol, styles.stColPosition]}>
              <Text style={[styles.atlanta, styles.parisClr]}>Atlanta</Text>
              <Text style={[styles.austin, styles.parisClr]}>Austin</Text>
              <Text style={[styles.austin, styles.parisClr]}>Barcelona</Text>
              <Text style={[styles.austin, styles.parisClr]}>Berlin</Text>
              <Text style={[styles.austin, styles.parisClr]}>Boston</Text>
              <Text style={[styles.austin, styles.parisClr]}>Capetown</Text>
              <Text style={[styles.austin, styles.parisClr]}>Charleston</Text>
              <Text style={[styles.austin, styles.parisClr]}>Chicago</Text>
              <Text style={[styles.austin, styles.parisClr]}>Dallas</Text>
              <Text style={[styles.detroit, styles.parisClr]}>Detroit</Text>
              <Text style={[styles.detroit, styles.parisClr]}>Denver</Text>
              <Text style={[styles.detroit, styles.parisClr]}>Hong Kong</Text>
              <Text style={[styles.detroit, styles.parisClr]}>Houston</Text>
              <Text style={[styles.detroit, styles.parisClr]}>
                Hudson Valley
              </Text>
              <Text style={[styles.detroit, styles.parisClr]}>Joshua Tree</Text>
              <Text style={[styles.detroit, styles.parisClr]}>Kansas City</Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                Las Vegas
              </Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>London</Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                Los Angeles
              </Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>Madrid</Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>Miami</Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>Maui</Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                Melbourne
              </Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                Mexico City
              </Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                Minneapolis
              </Text>
            </View>
            <Text style={[styles.cities2, styles.cities2Typo]}>Cities</Text>
            <View style={[styles.ndCol, styles.ndColPosition]}>
              <Text style={styles.lasVegasTypo}>Montreal</Text>
              <Text style={[styles.paris, styles.parisClr]}>Paris</Text>
              <Text style={[styles.paris, styles.parisClr]}>Philadelphia</Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                Nashville
              </Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                New Orleans
              </Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                New York City
              </Text>
              <Text style={[styles.lasVegas, styles.lasVegasTypo]}>
                North Carolina
              </Text>
              <Text style={[styles.orlando, styles.parisClr]}>Orlando</Text>
              <Text style={[styles.orlando, styles.parisClr]}>
                Palm Springs
              </Text>
              <Text style={[styles.orlando, styles.parisClr]}>Phoenix</Text>
              <Text style={[styles.orlando, styles.parisClr]}>Pittsburgh</Text>
              <Text style={[styles.orlando, styles.parisClr]}>
                Portland, ME
              </Text>
              <Text style={[styles.orlando, styles.parisClr]}>
                Portland, OR
              </Text>
              <Text style={[styles.orlando, styles.parisClr]}>Rome</Text>
              <Text style={[styles.orlando, styles.parisClr]}>San Diego</Text>
              <Text style={[styles.orlando, styles.parisClr]}>
                San Francisco
              </Text>
              <Text style={[styles.orlando, styles.parisClr]}>
                Santa Barbara
              </Text>
              <Text style={[styles.orlando, styles.parisClr]}>Seattle</Text>
              <Text style={[styles.orlando, styles.parisClr]}>Singapore</Text>
              <Text style={[styles.orlando, styles.parisClr]}>St. Louis</Text>
              <Text style={[styles.orlando, styles.parisClr]}>Sydney</Text>
              <Text style={[styles.orlando, styles.parisClr]}>Tokyo</Text>
              <Text style={[styles.orlando, styles.parisClr]}>Vancouver</Text>
              <Text style={[styles.orlando, styles.parisClr]}>
                Washington DC
              </Text>
            </View>
          </View>
          <View style={styles.citiesGroup}>
            <View style={[styles.cities3, styles.ndColPosition]}>
              <View style={[styles.stCol, styles.stColPosition]}>
                <Text style={[styles.atlanta, styles.parisClr]}>About us</Text>
                <Text style={[styles.austin, styles.parisClr]}>careers</Text>
                <Text style={[styles.austin, styles.parisClr]}>
                  experiences
                </Text>
              </View>
              <Text style={styles.cities2Typo}>Company</Text>
            </View>
            <View style={[styles.cities4, styles.stColPosition]}>
              <View style={[styles.stCol, styles.stColPosition]}>
                <Text style={[styles.atlanta, styles.parisClr]}>
                  NEWSLETTER
                </Text>
                <Text style={[styles.austin, styles.parisClr]}>CONTACT US</Text>
                <Text
                  style={[
                    styles.termsConditions,
                    styles.parisClr,
                  ]}>{`TERMS & CONDITIONS`}</Text>
                <Text style={[styles.termsConditions, styles.parisClr]}>
                  PRIVACY POLICY
                </Text>
                <Text style={[styles.onlineTrackingOpt, styles.parisClr]}>
                  ONLINE TRACKING OPT OUT GUIDE
                </Text>
              </View>
              <Text style={styles.cities2Typo}>Information</Text>
            </View>
          </View>
          <View style={styles.findPlacesOnOurAppParent}>
            <Text style={[styles.findPlacesOn, styles.parisClr]}>
              FIND PLACES ON OUR APP
            </Text>
            <View style={styles.googlePlayCtaParent}>
              <View style={styles.googlePlayCta} />
              <View style={styles.appStoreCta} />
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={[styles.theInfautationInc, styles.parisClr]}>
              2021 © The Infautation Inc. All Rights Reserved.
            </Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconscaretLayout: {
    height: 24,
    width: 24,
    overflow: 'hidden',
  },
  navPosition: {
    height: 112,
    width: 375,
    left: 0,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusPosition: {
    paddingBottom: Padding.p_mini,
    paddingRight: Padding.p_sm,
    paddingTop: Padding.p_6xl,
    paddingLeft: Padding.p_15xl,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: 375,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: Color.grayWhite,
  },
  iconSpaceBlock: {
    marginLeft: 5,
    height: 11,
  },
  bestFlexBox: {
    display: 'flex',
    alignItems: 'center',
  },
  collectionpostsPosition: {
    left: 24,
    position: 'absolute',
  },
  citiesClr: {
    color: Color.grayGray100,
    textAlign: 'left',
  },
  atomseyebrowPosition: {
    zIndex: 1,
    paddingBottom: Padding.p_9xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_9xs,
    height: 28,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    backgroundColor: Color.grayWhite,
  },
  bestSpaceBlock: {
    marginTop: 8,
    lineHeight: 26,
    color: Color.grayGray100,
    textAlign: 'left',
  },
  miniPosition1: {
    bottom: '0%',
    right: '0%',
  },
  stColPosition: {
    left: 0,
    position: 'absolute',
  },
  miniPosition: {
    left: '0%',
    top: '0%',
    position: 'absolute',
  },
  parisClr: {
    color: Color.grayWhite,
    textAlign: 'left',
  },
  lasVegasTypo: {
    width: 124,
    color: Color.grayWhite,
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 14,
    letterSpacing: 1.3,
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    textAlign: 'left',
    fontFamily: FontFamily.sH3CondensedBold,
  },
  cities2Typo: {
    lineHeight: 12,
    letterSpacing: 1.4,
    fontSize: FontSize.sCaption_size,
    color: Color.grayWhite,
    fontFamily: FontFamily.sCaption,
    textTransform: 'uppercase',
    textAlign: 'left',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  ndColPosition: {
    left: 172,
    position: 'absolute',
  },
  modeEditIcon: {
    top: 106,
    left: 327,
    display: 'none',
    position: 'absolute',
  },
  logoIcon: {
    width: 35,
    height: 21,
  },
  cityHomeLink: {
    fontSize: FontSize.size_9xl,
    lineHeight: 28,
    textTransform: 'capitalize',
    marginLeft: 8,
    textAlign: 'left',
    fontFamily: FontFamily.sH3CondensedBold,
    color: Color.primaryBlue50,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  iconscaret: {
    marginLeft: 4,
  },
  atomsweblogo: {
    top: 68,
    left: 24,
    position: 'absolute',
  },
  timeIcon: {
    width: 27,
    height: 10,
  },
  cellularIcon: {
    width: 17,
    height: 11,
  },
  wifiIcon: {
    width: 15,
  },
  batteryIcon: {
    width: 24,
    marginLeft: 5,
  },
  stack: {
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusBar: {
    display: 'none',
  },
  signUp: {
    height: '9.47%',
    width: '13.6%',
    top: '68.75%',
    left: '80%',
    textAlign: 'right',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
    color: Color.primaryBlue50,
    display: 'flex',
    position: 'absolute',
  },
  nav: {
    backgroundColor: Color.grayWhite,
    height: 112,
  },
  theBestNew: {
    fontSize: FontSize.mobileH1CompressedExtraBold_size,
    fontFamily: FontFamily.mobileH1CompressedExtraBold,
    width: 327,
    fontWeight: '800',
    letterSpacing: 1,
    color: Color.grayGray100,
  },
  cities: {
    lineHeight: 16,
    fontFamily: FontFamily.sCaption,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
  },
  dec72022: {
    fontSize: FontSize.mobileSmallCaps_size,
    letterSpacing: 2,
    lineHeight: 11,
    marginLeft: 13,
    fontFamily: FontFamily.sCaption,
    textTransform: 'uppercase',
    color: Color.grayGray100,
  },
  citiesParent: {
    marginTop: 24,
  },
  loremIpsumDolor: {
    lineHeight: 26,
    fontFamily: FontFamily.sCaption,
    marginTop: 24,
    width: 327,
    fontSize: FontSize.sH4CondensedBoldCaps_size,
  },
  theBestNewRestaurantsOf20Parent: {
    top: 152,
    width: 327,
  },
  imgIcon: {
    height: 183,
    zIndex: 0,
    width: 327,
  },
  kicker: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  atomseyebrow: {
    top: 155,
  },
  the25Best: {
    letterSpacing: 0.5,
    fontSize: FontSize.sH3CondensedBold_size,
    fontWeight: '700',
    fontFamily: FontFamily.sH3CondensedBold,
    width: 327,
    display: 'flex',
    alignItems: 'center',
  },
  summary: {
    fontFamily: FontFamily.sCaption,
    width: 327,
    fontSize: FontSize.sH4CondensedBoldCaps_size,
  },
  collectionposts: {
    top: 547,
    width: 327,
  },
  imgIcon1: {
    height: 116,
    width: 155,
    top: 0,
  },
  atomseyebrow1: {
    top: 88,
    paddingBottom: Padding.p_9xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_9xs,
    height: 28,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    backgroundColor: Color.grayWhite,
  },
  image1: {
    height: 116,
    width: 155,
  },
  theBestFirst: {
    width: 155,
    letterSpacing: 0.5,
    fontSize: FontSize.sH3CondensedBold_size,
    fontWeight: '700',
    fontFamily: FontFamily.sH3CondensedBold,
    display: 'flex',
    alignItems: 'center',
  },
  miniPost: {
    height: '89.38%',
    width: '47.4%',
    top: '10.62%',
    left: '52.6%',
    position: 'absolute',
  },
  imgIcon2: {
    height: 115,
    width: 156,
    zIndex: 0,
  },
  atomseyebrow2: {
    top: 87,
  },
  nycsNewRestaurant: {
    width: 156,
    letterSpacing: 0.5,
    fontSize: FontSize.sH3CondensedBold_size,
    fontWeight: '700',
    fontFamily: FontFamily.sH3CondensedBold,
    display: 'flex',
    alignItems: 'center',
  },
  miniPost1: {
    height: '88.94%',
    width: '47.71%',
    right: '52.29%',
    bottom: '11.06%',
  },
  collectionposts1: {
    top: 830,
    height: 226,
    width: 327,
  },
  collectionposts2: {
    top: 1088,
    width: 327,
  },
  miniPost2: {
    height: '100%',
    bottom: '0%',
    right: '0%',
    width: '100%',
    left: '0%',
    top: '0%',
  },
  collectionposts3: {
    top: 1371,
    height: 201,
    width: 156,
  },
  logoIcon1: {
    width: 212,
    height: 28,
  },
  atlanta: {
    width: 120,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  austin: {
    marginTop: 16,
    width: 120,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  detroit: {
    width: 119,
    marginTop: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  lasVegas: {
    marginTop: 16,
  },
  stCol: {
    top: 42,
  },
  cities2: {
    width: 48,
  },
  paris: {
    width: 112,
    marginTop: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  orlando: {
    width: 125,
    marginTop: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  ndCol: {
    top: 42,
  },
  cities1: {
    width: 297,
    height: 776,
    marginTop: 40,
  },
  cities3: {
    width: 120,
    height: 116,
    top: 0,
  },
  termsConditions: {
    marginTop: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  onlineTrackingOpt: {
    marginTop: 16,
    width: 155,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: FontSize.sH4CondensedBoldCaps_size,
    lineHeight: 14,
    letterSpacing: 1.3,
    fontFamily: FontFamily.sH3CondensedBold,
  },
  cities4: {
    height: 190,
    width: 155,
    top: 0,
  },
  citiesGroup: {
    width: 292,
    height: 190,
    marginTop: 40,
  },
  findPlacesOn: {
    letterSpacing: 0.5,
    fontSize: FontSize.sH3CondensedBold_size,
    fontWeight: '700',
    fontFamily: FontFamily.sH3CondensedBold,
    lineHeight: 26,
  },
  googlePlayCta: {
    width: 154,
    height: 46,
  },
  appStoreCta: {
    width: 157,
    marginLeft: 16,
    height: 46,
  },
  googlePlayCtaParent: {
    marginTop: 16,
    flexDirection: 'row',
  },
  findPlacesOnOurAppParent: {
    marginTop: 40,
  },
  socialIcons: {
    height: 17,
    width: 223,
    top: 0,
  },
  theInfautationInc: {
    top: 26,
    left: 2,
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    fontFamily: FontFamily.sCaption,
    position: 'absolute',
  },
  footer: {
    height: 50,
    width: 223,
    marginTop: 40,
  },
  navwebfooter: {
    top: 1652,
    backgroundColor: Color.primaryBlue50,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_21xl,
    flexDirection: 'row',
    width: 375,
    left: 0,
    position: 'absolute',
  },
  collections5: {
    flex: 1,
    height: 2957,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.grayWhite,
  },
});

export default App;
