import React from 'react';
import Discography from '../components/Discography';

// Components
import Layout from '../components/Layout';

const albumInfo = [
  {
    id: 0,
    artist: 'Taylor Kelly',
    record: 'Up Up and Away - LP',
    credits:
      'Producer, Engineer, Mixer, Drums, Percussion, Synths, Horn Arrangements',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/up-up-and-away/1473533689',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/2VFZ9TRuj0CDRmP9mbDZPP?si=IRrHA1IhSgyJa4V0UPYrZQ&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 1,
    artist: 'Taylor Kelly',
    record: 'California - Single',
    credits: 'Producer, Engineer, Mixer, Synths',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/california/1473533689?i=1473533728',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/4QOsU0xMbmoOFMAeT9wdP8?si=WaV8P5QZS-CV0sMxXH3PcQ&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 2,
    artist: 'Taylor Kelly',
    record: 'The Fire - Single',
    credits: 'Producer, Engineer, Mixer, Drums, Synths',
    label: 'Independent',
    year: '2020',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/the-fire/1497991882?i=1497991883',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/5jWVteuuK60r4O5aYaCnoJ?si=A-wez_sCS3WsOhiVaA7i_g&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 3,
    artist: 'Taylor Kelly',
    record: 'I Am - Single',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2020',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/i-am/1532778336?i=1532778337',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/2nfhDWuSdCTPFpQpCiNXfT?si=kbuS-DeHQUOUiVYqF8vcfA&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 4,
    artist: 'Taylor Kelly',
    record: 'Jwytk - Single',
    credits: 'Producer, Engineer, Mixer, Horn Arrangements',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/jwytk/1458552593?i=1458552595',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/41XaSlpEwDqos6R8nLWkqz?si=ho8hEG1ZRBOqWu_2daXnoQ&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 5,
    artist: 'Taylor Kelly',
    record: 'Taco Night - Single',
    credits: 'Producer, Engineer, Mixer, Synths',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/taco-night-feat-mic-stewart/1462910827?i=1462910829',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/5QyQMryQIYbyTWuAWTLVCh?si=dORp4pebS9qcctRuCJR4Tw&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 6,
    artist: 'Shoot the Messenger',
    record: 'Stay - Single',
    credits: 'Vocal Engineer, Mixer',
    label: 'Independent',
    year: '2021',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/stay/1561719497?i=1561719501',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/450KP3lupN4uOmOrHKZdSy?si=IiLmW0eUScy5v9JvpnzsBA&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 7,
    artist: 'Gracie Martin',
    record: 'Dreams Die - Single',
    credits: 'Co-Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2021',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/dreams-die-single/1547540817',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/1429pWwEkQPkJSHW7c7xII?si=0f91ea9dbb40447f',
      },
    ],
    image: '',
  },
  {
    id: 8,
    artist: 'Gracie Martin',
    record: '10% - Single',
    credits: 'Co-Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/10-single/1484411609',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/75EUqKRAQpScXs2QwZZrNX?si=4d8a4b00a97146a9',
      },
    ],
    image: '',
  },
  {
    id: 9,
    artist: 'Gracie Martin',
    record: 'Like Falling Asleep - Single',
    credits: 'Co-Producer, Engineer, Mixer, Organ',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/like-falling-asleep-single/1482645280',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/2ulVrPl29cgnOUCqrr7Cdb?si=7f44a3f5f74b4fba',
      },
    ],
    image: '',
  },
  {
    id: 10,
    artist: 'Punk Hands',
    record: 'Enough - Single',
    credits: 'Co-Producer, Engineer, Mixer, Drums',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/enough/1466313221?i=1466313222',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/3nRwlROmEcvMv5OXqlIBIu?si=f20bf9cc8c884098',
      },
    ],
    image: '',
  },
  {
    id: 11,
    artist: 'Keely Sibilia',
    record: 'Wild - Single',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2020',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/wild-single/1519272038',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/56rFlGOAAoYHRsp7Faowpe?si=64f40e5bc32441a9',
      },
    ],
    image: '',
  },
  {
    id: 12,
    artist: 'Keely Sibilia',
    record: 'Happy - Single',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/happy-single/1402828230',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/4Sb9YZ85gthLVBxUkNNfHj?si=bb34b8e58489499d',
      },
    ],
    image: '',
  },
  {
    id: 13,
    artist: 'Keely Sibilia',
    record: 'Make It Pour - Single',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/make-it-pour-single/1437974381',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/3qA8wAnWqddibc64u7GE4b?si=rG3Uj0UHQouoU2TszPxdNA&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 14,
    artist: 'Keely Sibilia',
    record: 'Heartbeat - Single',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/heart-beat-single/1450872751',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/0efKpBJMdLUj7pMuWHznEQ?si=ipd36aVsQaGYaiBmc-gWsw&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 15,
    artist: 'Keely Sibilia',
    record: 'Title 1 - Single',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/title-one-single/1440798007',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/37da2WduvWer2woUMam9d0?si=bYpnVc5NS42-W0kd6fOtiA&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 16,
    artist: 'Nathan Allebach',
    record: 'Waste - LP',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2016',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/waste/1136370976',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/1XcKu41KAVrLAaM9Z29FLg?si=kP_vcPCqQWuhoaa9U4ycuw&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 17,
    artist: 'Nathan Allebach',
    record: 'Tension - LP',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/tension/1442711788',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/4YxbDazy3VWmwpGylkci74?si=hFvSSXigQwCWDzCH77PQ7Q&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 18,
    artist: 'Weekend Athlete',
    record: 'Sussing - EP',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/sussing-ep/1475755368',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/4M7Wy6EQ4LyhI9cYjtuwRz?si=mfZJ5URYQ42OlaqkRttqXg&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 19,
    artist: 'Josh Nussbaum',
    record: 'What Already Is - EP',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2016',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/what-already-is-ep/1072185363',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/5E9pJK5NUzW8pL4wTjggfz?si=7qX_k6tZQV6xnNbR67c_3Q&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 20,
    artist: 'Ode To Omni',
    record: 'Anchors - LP',
    credits: 'Mixer',
    label: 'Independent',
    year: '2015',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/anchors/966398285',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/6UWY8gyrl4CvFzkZkAj0BU?si=fr4obBmLShW8lKBwMxjLng&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 21,
    artist: 'Ode To Omni',
    record: 'Perception - LP',
    credits: 'Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/perception/1345149538',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/4N4g4mL40YmgtQZooli0Cg?si=7ecNwrOeRGWqka6BcYoY7A&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 22,
    artist: 'Ode To Omni',
    record: 'Superstition - Single',
    credits: 'Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/superstition-feat-lee-mo-single/1347510156',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/6opsUtGGGW3rAHUWQtz0Xp?si=gXNRieQzRdCQh1SH3UsNnw&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 23,
    artist: 'Rover Rover',
    record: 'Patch of Dirt - Single',
    credits: 'Engineer, Mixer',
    label: 'Independent',
    year: '2017',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/patch-of-dirt/1318800100?i=1318800196',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/1gUtW1G6LrxpKXcCRwgxTS?si=73Ktrc3kSsagaSSDo5wN1w&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 23,
    artist: 'Rover Rover',
    record: 'Peace Drink - LP',
    credits: 'Engineer, Mixer',
    label: 'Independent',
    year: '2020',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/peace-drink/1512649439',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/34VEC7Z5u44qZpSmKdd1Zf?si=oyMH7eqdSHqsW6XOFCksHQ&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 24,
    artist: 'Rover Rover',
    record: 'No Where to Go - Single',
    credits: 'Engineer, Mixer',
    label: 'Independent',
    year: '2020',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/nowhere-to-go/1506738001?i=1506738002',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/16vV3EXVdRvIshACPl20wW?si=8WowBu4qQQKf92mogTGGSQ&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 25,
    artist: 'Rover Rover',
    record: 'No Where to Go - Single',
    credits: 'Engineer, Mixer',
    label: 'Independent',
    year: '2020',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/nowhere-to-go/1506738001?i=1506738002',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/16vV3EXVdRvIshACPl20wW?si=8WowBu4qQQKf92mogTGGSQ&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 26,
    artist: 'Joshua Bation',
    record: "I'm Leaving",
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2017',
    musicLinks: [
      {
        id: 0,
        type: 'Bandcamp',
        link: 'https://joshuabationmusic.bandcamp.com/releases',
      },
    ],
    image: '',
  },
  {
    id: 27,
    artist: 'Joshua Bation',
    record: 'Lurking',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2017',
    musicLinks: [
      {
        id: 0,
        type: 'Amazon',
        link: 'https://music.amazon.in/albums/B0757C1WFC',
      },
    ],
    image: '',
  },
  {
    id: 28,
    artist: 'Sonnder',
    record: 'Never Want You Back',
    credits: 'Engineer, Mixer',
    label: 'Independent',
    year: '2018',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/never-want-you-back/1408484029?i=1408484031',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/album/4pLxuPEdxtGILOBzyOAZEI?si=Rk_rxmPTRFigldj9RpoCJw&dl_branch=1',
      },
    ],
    image: '',
  },
  {
    id: 29,
    artist: 'Míssy Belgré',
    record: 'Love Spell',
    credits: 'Engineer, Mixer',
    label: 'Independent',
    year: '2019',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/love-spell/1475370170?i=1475370171',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/2sMoXWwQJhwn8E4T9FtQXV?si=c5626512ce664186',
      },
    ],
    image: '',
  },
  {
    id: 30,
    artist: 'Maggie Mae',
    record: 'Hometown',
    credits: 'Producer, Engineer, Mixer',
    label: 'Independent',
    year: '2020',
    musicLinks: [
      {
        id: 0,
        type: 'Apple Music',
        link: 'https://music.apple.com/us/album/hometown/1533070746?i=1533070750',
      },
      {
        id: 1,
        type: 'Spotify',
        link: 'https://open.spotify.com/track/1o6ZFkhiMO5EdLoGBOxwW2?si=71ab6346494349d3',
      },
    ],
    image: '',
  },
  {
    id: 31,
    artist: 'Feedlab Music',
    record: 'Make Me Lovely',
    credits: 'Engineer, Mixer',
    label: 'Independent',
    year: '2014',
    musicLinks: [
      {
        id: 0,
        type: 'YouTube',
        link: 'https://www.youtube.com/watch?v=VOgMdtFLso8',
      },
    ],
    image: '',
  },
];

const discography = () => {
  return (
    <Layout>
      <Discography discography={albumInfo} />
    </Layout>
  );
};

export default discography;
