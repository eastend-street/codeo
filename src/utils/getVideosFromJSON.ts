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
        return ReactJSON;
      case "HTML tutorial":
        return HtmlJSON;
      case "CSS tutorial":
        return CssJSON;
      case "JavaScript":
        return JavaScriptJSON;
      case "Python tutorial":
        return PythonJSON;
      case "Ruby tutorial":
        return RubyJSON;
      case "how to learn programming":
        return HowToLearnJSON;
      case "Carrer engineer":
        return CarrerJSON;
      case "programming":
        return PopularJSON;
      default:
        return {};
    }
  };
  
  export default getVideosFromJSON;