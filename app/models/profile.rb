class Profile < ApplicationRecord
	belongs_to :user
	validates :user, presence: true
	has_many :photos, through: :user

	accepts_nested_attributes_for :photos
	
	def username
		self.user.username
	end

end
