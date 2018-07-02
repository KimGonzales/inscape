class Profile < ApplicationRecord
	belongs_to :user
	has_many :photos, through: :user

	accepts_nested_attributes_for :photos

	def username
		self.user.username
	end

end
