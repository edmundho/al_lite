class Api::VehiclesController < ApplicationController
  def create
    @vehicle = Vehicle.new(vehicle_params)

    render json: @vehicle if @vehicle.save
  end

  def show
    # @vehicle = Vehicle.find(params[:id])
    @vehicle = Vehicle.find_by(vin: params[:vin])
  end

  def update
    @vehicle = Vehicle.find(params[:id])

    render json: @vehicle if @vehicle.update(views: @vehicle.views + 1)
  end

  def vehicle_params
    params.require(:vehicle).permit(:vin)
  end
end
