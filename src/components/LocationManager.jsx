var React = require('react');
var Day = require('./Day.jsx');
var HTTP = require('../services/httpservice');

var LocationManager = React.createClass({

    getInitialState: function(){
      return {data: [], city: '', currenCity: 'Please enter a Location to find Weather Forecast!'};
    },

    submitCity: function(event){
      event.preventDefault();
      var url = this.state.city;
      HTTP.get(url)  // pass the current state city to callback function to get api response
      .then(function(data){
        console.log("data from call back http.get: ",data);
        //data should be the json object!
        var currenCity = data.city.name + ", " + data.city.country;
        this.setState({data: data, city:'', currenCity: currenCity });
      }.bind(this));//we are calling bind on function(data) function, we want to say the 'this' is our react component
    },

    onChange: function(e){
      //debugger;
      this.setState({data:[], city: e.target.value});
    },


    render: function() {


      if (this.state.data.list){
        var currenData = this.state.data.list;

        var transformDate = function(hrsWithResDate){
          var date = new Date(new Date().getTime() + hrsWithResDate * 60 * 60 * 1000);
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();

          if (month < 10 ){
            date = year + "-0" + month;

            if (day < 10){
              date = date + "-0" + day;
            }
            else{
              date = date + "-" + day;
            }
          }
          else if (month > 10){
            date = year + "-" + month;

            if (day < 10){
              date = date + "-0" + day;
            }
            else{
              date = date + "-" + day;
            }
          }
          else {
            date = "error";
          }
          return date;
        }

        //var today = transformDate(0);
        var tomorrow = transformDate(24);
        var day3 = transformDate(48);
        var day4 = transformDate(72);
        var day5 = transformDate(96);
        var day6 = transformDate(118);

        //console.log("today: " + today);
        console.log("tomorrow: " + tomorrow);
        console.log("day 3: " + day3);
        console.log("day 4: " + day4);
        console.log("day 5: " + day5);



        var arrayOfDays = [];
        //var todayTemps = [];
        var tomorrowTemps = [];
        var day3Temps = [];
        var day4Temps = [];
        var day5Temps = [];
        var day6Temps = [];


        for (var i = 0 ; i < currenData.length ; i++){

          // if (currenData[i].dt_txt.split(' ')[0] === today){
          //   todayTemps.push(currenData[i]);
          // }
          if (currenData[i].dt_txt.split(' ')[0] === tomorrow){
            tomorrowTemps.push(currenData[i]);
          }
          else if (currenData[i].dt_txt.split(' ')[0] === day3){
            day3Temps.push(currenData[i]);
          }
          else if (currenData[i].dt_txt.split(' ')[0] === day4){
            day4Temps.push(currenData[i]);
          }
          else if (currenData[i].dt_txt.split(' ')[0] === day5){
            day5Temps.push(currenData[i]);
          }
          else if (currenData[i].dt_txt.split(' ')[0] === day6){
            day6Temps.push(currenData[i]);
          }
        }


        //console.log(todayTemps);
        console.log(tomorrowTemps);
        console.log(day3Temps);
        console.log(day4Temps);
        console.log(day5Temps);

        //arrayOfDays.push(todayTemps);
        arrayOfDays.push(tomorrowTemps);
        arrayOfDays.push(day3Temps);
        arrayOfDays.push(day4Temps);
        arrayOfDays.push(day5Temps);
        arrayOfDays.push(day6Temps);

        console.log(arrayOfDays);

        var callForecast = arrayOfDays.map(function(item, index){
          return <Day dayData={item} />
        });
      }

      var styleFrom = {
        marginTop: 15
      };

      var inputStyle = {
        width: "130%",
        borderRadius: "15px 15px 15px 15px"
      };

      var buttonStyle = {
        borderRadius: "15px 15px 15px 15px",
        background: "#F5CF6A",
        textShadow: "0 1px 0 #F5CF6A"
      };

      return (
        <div>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src="../public/images/logo2.png" alt="" />
          </div>
          <div className="col-sm-4">
            <div style={styleFrom} className="something text-center form-group">
              <form onSubmit={this.submitCity}>
                <div className="col-sm-8">
                  <input style={inputStyle} type="text" className="form-control" placeholder="Type name of a city..." onChange={this.onChange} value={this.state.city}/>
                </div>
                <div className="col-sm-4">
                  <button style={buttonStyle} className="btn btn-default">Find City!</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>

          <div className="something text-center">
            <h2>Current Location: <b>{this.state.currenCity}</b></h2>
          </div>

          <div className="container">
            {callForecast}
          </div>
        </div>
      );
    }
});

module.exports = LocationManager;
