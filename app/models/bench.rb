class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bound(bounds)
    Bench.where("(? > lat) AND (lat > ?) AND (? > lng) AND (lng > ?)",
    bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
    bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f)
  end

  def self.filter(bounds, min, max)
    Bench.where("(? > lat) AND (lat > ?) AND (? > lng) AND (lng > ?)
    AND (seating >= ?) AND (? >= seating)",
    bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
    bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f,
    min.to_i, max.to_i)
  end

end

# bounds = {"northEast"=> {"lat"=> 100, "lng"=> 150}, "southWest"=> {"lat"=> -100, "lng"=> -100}}
