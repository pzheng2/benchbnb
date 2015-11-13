class Api::BenchController < ApplicationController
  def index
    p params
    @benches = Bench.in_bound(params[:bounds])
    render json: @benches
  end

  def create
    @bench = Bench.create!(bench_params)
    render json: @bench
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end


end
