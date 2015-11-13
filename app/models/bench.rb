class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bound(bounds)
    Bench.where("(? > lat) AND (lat > ?) AND (? > lng) AND (lng > ?)",
    bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
    bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f)
  end
end
