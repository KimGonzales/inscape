class Collection < ApplicationRecord
  belongs_to :user
  has_many :photo_collections
  has_many :photos, through: :photo_collections
end
