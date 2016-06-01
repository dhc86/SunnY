var React = require('react');

var TimeForecast = React.createClass({
    render: function() {

      var degrees = "°";
      var getUrlIcon = "http://openweathermap.org/img/w/" + this.props.item.weather[0].icon +".png";

      debugger;
      return (
        <div>

        <div className="table-responsive">
          <table className="table-condensed">
          <div className="row">
            <tbody>
              <tr>
                <div className="col-sm-12 text-center">
                  <td>{this.props.item.dt_txt.slice(11,16)}</td>

                  <td><img src={getUrlIcon} alt="" /></td>

                  <td>{Math.floor(this.props.item.main.temp - 273.15) + degrees[1] + "C"}</td>
                </div>
              </tr>
            </tbody>
          </div>
          </table>
        </div>
        </div>
      );
    }
});

module.exports = TimeForecast;
