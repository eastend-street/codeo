import ReactJSON from "../data/youtubeData/react.json";
import HtmlJSON from "../data/youtubeData/html.json";
import CssJSON from "../data/youtubeData/css.json";
import JavaScriptJSON from "../data/youtubeData/javascript.json";
import PythonJSON from "../data/youtubeData/python.json";
import RubyJSON from "../data/youtubeData/ruby.json";
import HowToLearnJSON from "../data/youtubeData/howtolearn.json";
import CarrerJSON from "../data/youtubeData/carrer.json";
import PopularJSON from "../data/youtubeData/popular.json";

const getVideosFromJSON = (param: string) => {
  switch (param) {
    case "react tutorial":
      return ReactJSON.data.items;
    case "HTML tutorial":
      return HtmlJSON.data.items;
    case "CSS tutorial":
      return CssJSON.data.items;
    case "JavaScript":
      return JavaScriptJSON.data.items;
    case "Python tutorial":
      return PythonJSON.data.items;
    case "Ruby tutorial":
      return RubyJSON.data.items;
    case "how to learn programming":
      return HowToLearnJSON.data.items;
    case "Carrer engineer":
      return CarrerJSON.data.items;
    case "programming":
      return PopularJSON.data.items;
    default:
      return {};
  }
};

export default getVideosFromJSON;
