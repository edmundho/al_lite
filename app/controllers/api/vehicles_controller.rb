class Api::VehiclesController < ApplicationController
  def create
    @vehicle = Vehicle.new(vehicle_params)

    if @vehicle.save
      render json: @vehicle.views
    else
      render json: @vehicle.errors.full_messages, status: 422
    end
  end

  def show
    @vehicle = Vehicle.find_by(vin: params[:vin])
    if @vehicle
      render json: @vehicle.views
    else
      render json: 0
    end
  end

  def update
    @vehicle = Vehicle.find_by(vin: params[:vin])

    render json: @vehicle.views if @vehicle.update(views: @vehicle.views + 1)
  end

  def vehicle_params
    params.require(:vehicle).permit(:vin)
  end
end
