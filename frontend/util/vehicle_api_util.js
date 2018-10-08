export const checkViews = (vin) => (
  $.ajax({
    method: "GET",
    url: `/api/vehicles/${vin}`
  })
);

export const incrementViews = (vin) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/vehicles/${vin}`
  })
);

export const postVehicle = vehicle => (
  $.ajax({
    method: 'post',
    url: '/api/vehicles',
    data: {
      vehicle: {
        vin: vehicle.vin
      }
    }
  })
);