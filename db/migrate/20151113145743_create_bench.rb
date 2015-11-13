class CreateBench < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.text :description, presence: true
      t.float :lat, presence: true
      t.float :lng, presence: true

      t.timestamps;
    end
  end
end
