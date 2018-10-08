import { connect } from 'react-redux';
import { receiveCars } from '../../actions/cars_actions';
import ListingsPage from './listings_page';

const mapStateToProps = (state = {}, ownProps) => ({
  cars: state.entities.cars,
  page: ownProps.match.params.page,
  min: ownProps.match.params.min,
  max: ownProps.match.params.max
});

const mapDispatchToProps = (dispatch) => ({
  receiveCars: (page, min, max) => dispatch(receiveCars(page, min, max)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);