import React from 'react';

export default ({data}) => {
  var logos = [
    {
      name: ['Corellian Engineering Corporation'],
      url: 'http://pre14.deviantart.net/a1ba/th/pre/i/2016/364/3/c/corellian_engineering_corporation_logo_by_viperaviator-datfujn.png'
    },
    {
      name: ['Kuat Drive Yards'],
      url: 'http://img04.deviantart.net/f596/i/2012/153/0/d/kuat_drive_yards_logo_banner_by_viperaviator-d520ebl.png'
    },
    {
      name: ['Koensayr Manufacturing'],
      url: 'http://img05.deviantart.net/0acd/i/2012/152/1/c/koensayr_manufacturing_logo_banner_by_viperaviator-d51wajo.png'
    },
    {
      name: ['Incom', 'Incom Corporation', 'Inc.', 'Inc'],
      url: 'http://img10.deviantart.net/c7fc/i/2012/149/9/3/incom_corp_banner_by_viperaviator-d51lchh.png'
    },
    {
      name: ['Republic Sienar Systems', 'Sienar Fleet Systems'],
      url: 'http://img12.deviantart.net/ba9d/i/2012/152/5/8/sienar_fleet_systems_logo_banner_by_viperaviator-d51ybta.png'
    },
    {
      name: ['Cygnus Spaceworks'],
      url: 'http://vignette3.wikia.nocookie.net/starwars/images/4/48/CygnusSpaceworks-NEGVV.png/revision/latest/scale-to-width-down/180?cb=20080420004443'
    },
    {
      name: ['Imperial Department of Military Research'],
      url: 'https://vignette1.wikia.nocookie.net/starwars/images/9/9c/Imperial_Department_Research.png/revision/latest?cb=20110630140110&path-prefix=nl'
    },
    {
      name: ['Kuat Systems Engineering'],
      url: 'https://vignette3.wikia.nocookie.net/starwars/images/e/e9/Kuat_Systems_Engineering.svg/revision/latest?cb=20080322021106'
    },
    {
      name: ['Mon Calamari shipyards'],
      url: 'http://vignette2.wikia.nocookie.net/starwars/images/a/a6/Mon_Cal_logo.svg/revision/latest/scale-to-width-down/500?cb=20080315025815'
    },
    {
      name: ['Slayn & Korpil'],
      url: 'https://vignette4.wikia.nocookie.net/starwars/images/0/0f/Slayn_Korpil.png/revision/latest?cb=20090323140247&path-prefix=nl'
    },
    {
      name: ['Theed Palace Space Vessel Engineering Corps', ],
      url: 'http://vignette3.wikia.nocookie.net/starwars/images/2/26/TheedVesselEngineering.svg/revision/latest/scale-to-width-down/350?cb=20160105215048'
    },
    {
      name: ['Nubia Star Drives'],
      url: 'http://vignette3.wikia.nocookie.net/starwars/images/c/cb/SpirographInSpace.svg/revision/latest/scale-to-width-down/350?cb=20120805135834'
    },
    {
      name: ['Rendili StarDrive'],
      url: 'http://vignette2.wikia.nocookie.net/starwars/images/e/ee/Rendili_StarDrive.png/revision/latest/scale-to-width-down/250?cb=20110421094228&path-prefix=nl'
    },
    {
      name: ['Gallofree Yards'],
      url: 'https://vignette4.wikia.nocookie.net/starwars/images/a/a0/Gallofree_Yards_Inc.svg/revision/latest/scale-to-width-down/361?cb=20160518014807'
    },
    {
      name: ['Hoersch-Kessel Drive'],
      url: 'http://vignette1.wikia.nocookie.net/starwars/images/8/8f/Hoersch-Kessel_Drive.svg/revision/latest/scale-to-width-down/602?cb=20080322021052'
    },
    {
      name: ['Subpro Corporation'],
      url: 'https://vignette2.wikia.nocookie.net/starwars/images/0/07/Sublight_Products_Corporation.svg/revision/latest?cb=20160515051555'
    },
    {
      name: ['Free Dac Volunteers Engineering corps.', 'Botajef Shipyards', 'Alliance Underground Engineering', 'Rothana Heavy Engineering', 'Huppla Pasa Tisc Shipwrights Collective', 'Allanteen Six shipyards', 'Feethan Ottraw Scalable Assemblies', 'Gwori Revolutionary Industries', 'Fondor Shipyards'],
      url: 'http://emptyensemble.com/wp-content/themes/emptyensemble2015/assets/images/empty_ensemble_empty_set_logo.png'
    },

  ]
  function getLogoFor(company) {
    return logos.find((obj) => obj.name.includes(company)).url;
  }

  function renderImages(data) {
    if (data) {
      return data.map((company) => {
        return <img key={company} src={getLogoFor(company)} alt={company} title={company} className="logo"/>
      })
    }
  }

  return (
    <div className="logos">{renderImages(data)}</div>);
}