class CreateVehicles < ActiveRecord::Migration[5.2]
  def change
    create_table :vehicles do |t|
      t.string :vin, null: false
      t.integer :views, default: 1

      t.timestamps
    end
  end
end
