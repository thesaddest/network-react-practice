import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId)
    }

    render() {
      return (
          <Profile {...this.props} profile={this.props.profile}/>
      );
  }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

function withRouter(Component){
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<Component {...props} router={{location, navigate,params}} />);
    }
    return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);