import { connect } from 'react-redux';
import CarDetail from './car_detail';
import { receiveCars } from '../../actions/cars_actions';

const mapStateToProps = (state = {}, ownProps) => {
  const vinSelected = ownProps.match.params.vin;
  const cars = state.entities.cars.records;
  const selectedCar = cars.find(car => car.vin === vinSelected);

  return {
    car: selectedCar,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);