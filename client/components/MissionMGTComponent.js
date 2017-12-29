import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';

import IsrSyncContainer from '../containers/IsrSyncContainer';
import AtoContainer from '../containers/AtoContainer';
import PedTaskingContainer from '../containers/PedTaskingContainer';
import MissionDetailContainer from '../containers/MissionDetailContainer';

class MissionMGTComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  renderMenuItems() {

    const {translations: {translations}, match} = this.props;

    const menuItems = [
      {title: 'isr sync', url: `${match.url}/isr-sync`},
      {title: 'ato', url: `${match.url}/ato`},
      {title: 'ped tasking', url: `${match.url}/ped-tasking`},
      {title: 'mission detail', url: `${match.url}/mission-detail`},
    ];

    return menuItems.map((item, i) => {
      let image = '/images/button-line-highlight.png';
      let matchForLink = (this.props.routing.location.pathname.indexOf(item.url) !== -1);

      return (
        <div className="submenu-button" key={i}>
          <NavLink to={item.url} className="submenu" activeClassName="active-submenu-item">
            {item.title}
            {matchForLink ?
              (
                <div className="under-button-line">
                  <img src={image} className="under-button-image pull-right" alt=""/>
                </div>
              ):
              null}
          </NavLink>
        </div>
      );
    });
  }

  render() {
    const {translations: {translations}, match} = this.props;

    return (
      <div>
        <div className="container-fluid sub-buttons">
          <div className="buttons-list">
            {this.renderMenuItems()}
          </div>
        </div>
        <Switch>
          <Route path={`${match.url}/isr-sync`} component={IsrSyncContainer} />
          <Route path={`${match.url}/ato`} component={AtoContainer} />
          <Route path={`${match.url}/ped-tasking`} component={PedTaskingContainer} />
          <Route path={`${match.url}/mission-detail`} component={MissionDetailContainer} />
        </Switch>
      </div>
    );
  }
}

MissionMGTComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
  translations: PropTypes.object
};

const mapStateToProps = state => {
  return {
    translations: state.translationsReducer,
    routing: state.routing,
  };
};

export default connect(mapStateToProps)(MissionMGTComponent);