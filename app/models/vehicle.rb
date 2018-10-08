class Vehicle < ApplicationRecord
  validates :vin, presence: true, uniqueness: true
  validates :views, numericality: { only_integer: true }
end
