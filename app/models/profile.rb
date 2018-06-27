class Profile < ApplicationRecord
    belongs_to :user
    has_many :photos, through: :user
end
