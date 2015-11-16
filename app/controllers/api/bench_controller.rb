class Api::BenchController < ApplicationController

  def index
    if params[:minSeats] != ""
      @benches = Bench.filter(params[:bounds], params[:minSeats], params[:maxSeats])
    else
      @benches = Bench.in_bound(params[:bounds]);
    end
    render json: @benches
  end

  def create
    @bench = Bench.create!(bench_params)
    render json: @bench
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end


end
