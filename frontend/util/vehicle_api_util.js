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

export const postVehicle = vin => (
  $.ajax({
    method: 'post',
    url: '/api/vehicles',
    data: {
      vehicle: {
        vin: vin
      }
    }
  })
);