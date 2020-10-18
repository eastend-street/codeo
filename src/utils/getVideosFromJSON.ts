import {
  careers,
  css,
  howToLearn,
  html,
  javascript,
  popular,
  python,
  react,
  ruby
} from 'constants/youtubeData';

type VideosMap = {
  [key: string]: object[];
};

const videosMap: VideosMap = {
  'react tutorial': react.data.items,
  'HTML tutorial': html.data.items,
  'CSS tutorial': css.data.items,
  JavaScript: javascript.data.items,
  'Python tutorial': python.data.items,
  'Ruby tutorial': ruby.data.items,
  'how to learn programming': howToLearn.data.items,
  'Careers engineer': careers.data.items,
  programming: popular.data.items
};

const getVideosFromJSON = (param: string): object[] => videosMap[param];

export default getVideosFromJSON;
