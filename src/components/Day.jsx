var React = require('react');
var TimeForecast = require('./TimeForecast.jsx');

var Day = React.createClass({
    render: function() {

      //debugger;
      var displayDescription = this.props.dayData.map(function(item){
          return (<TimeForecast item={item}/>);
      });

      var getVideo = function(dayData){
        debugger;
        if (dayData[0].weather[0].description.toUpperCase() === "BROKEN CLOUDS" || dayData[0].weather[0].description.toUpperCase() === "SCATTERED CLOUDS"){
          return "../public/videos/clouds.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "LIGHT RAIN"){
          return "../public/videos/lightRain.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "FEW CLOUDS"){
          return "../public/videos/clearSky.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "CLEAR SKY"){
          return "../public/videos/sun.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "LIGHT RAIN"){
          return "../public/videos/lightRain.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "OVERCAST CLOUDS"){
          return "../public/videos/overcastClouds.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "MODERATE RAIN"){
          return "../public/videos/moderateRain.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "HEAVY INTENSITY RAIN"){
          return "../public/videos/moderateRain.mp4";
        }
        else if (dayData[0].weather[0].description.toUpperCase() === "LIGHT SNOW" || dayData[0].weather[0].description.toUpperCase() === "SNOW"){
          return "../public/videos/snow.mp4";
        }
      };

      var styleDayContainer = {
        background: "rgba(0, 0, 0, 0.49)",
        color: "white",
        marginRight: 10,
        borderRadius: 10
      };



      var videoStyle = {
        borderRadius: 25
      };

      return (
        <div className="col-md-15 col-sm-3 text-center" style={styleDayContainer}>
          <h3>{this.props.dayData[0].dt_txt.slice(0,11)}</h3>
          <h5>{this.props.dayData[0].weather[0].description.toUpperCase()}</h5>
          <div className="embed-responsive embed-responsive-4by3" loop="loop" autoplay>
            <iframe style={videoStyle} className="embed-responsive-item" src={getVideo(this.props.dayData)} loop="loop" Volume="0"></iframe>
          </div>
          {displayDescription}
        </div>
      );
    }
});

module.exports = Day;
