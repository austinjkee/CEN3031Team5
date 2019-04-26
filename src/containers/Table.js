import React, { Component } from 'react';
import Cookies from 'js-cookie';

class TweetTable extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount() {
        const z = this.props.info;
        console.log("Search Mounted.", this.props.info);
        var Cookies2 = Cookies.noConflict();
        Cookies2.set('search', z, { maxAge: 90000 });
    }

    componentDidUpdate() {
        const z = this.props.info;
        console.log("Search Updated.", this.props.info);
        var Cookies2 = Cookies.noConflict();
        Cookies2.set('search', z, { maxAge: 90000 });
    }

  render() {
      let qwerty = "";
      this.componentDidUpdate();
      var Cookies2 = Cookies.noConflict();
      var search = Cookies2.get('search');
      console.log("cookie", search);
      if(search !== undefined){
          var smcache = JSON.parse(search);
          console.log("object that was in cookie.", smcache);
          qwerty = smcache.map((item, i) => {
              console.log(item.name);
              return (
                  <tr>
                      <td>{item.user.name}</td>
                      <td>{item.full_text}</td>
                      <td>{item.favorite_count}</td>
                      <td>{item.retweet_count}</td>
                  </tr>
              );
          });
      }
      else{
          qwerty = () => {
             return (<></>);
          };
      }

    return (

        <div>
        <div>
        </div>
          <div className="Info">
              <table class="table">
                  <thead class="thead-dark">
                      <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Tweet</th>
                          <th scope="col">Favorite Count</th>
                          <th scope="col">Retweet Count</th>
                      </tr>
                  </thead>
                  <tbody>
                  {qwerty}
                  </tbody>

              </table>

      </div>
  </div>
    );
  }
 }
 export default TweetTable;
