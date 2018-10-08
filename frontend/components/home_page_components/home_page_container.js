import { connect } from 'react-redux';
import { receiveCars } from '../../actions/cars_actions';
import HomePage from './home_page';

const mapStateToProps = (state = {}) => ({
});

const mapDispatchToProps = (dispatch) => ({
  receiveCars: (page, min, max) => dispatch(receiveCars(page, min, max)),
});

export default connect (mapStateToProps, mapDispatchToProps)(HomePage);